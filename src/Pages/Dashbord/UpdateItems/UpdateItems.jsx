import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItems = () => {
  const { name, category, price, recipe, _id } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublick = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);

    //image upload to imgbb
    const imageFile = { image: data.image[0] };
    const res = await axiosPublick.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItems = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItems);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with imgbb url", res.data);
  };
  return (
    <div>
      <SectionTitle
        heading={"UPDATE ITEM"}
        subHeading={"What's new"}
      ></SectionTitle>

      <div className="lg:max-w-5xl bg-[#F6F6F6] p-5 mx-auto md:mb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control my-6">
            <label className="label">
              <span className="label-text font-bold text-base">
                Recipe name*
              </span>
            </label>
            <input
              type="text"
              defaultValue={name}
              {...register("name", { required: true })}
              placeholder="Recipe name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex gap-6 items-center">
            {/* cetegory */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-base">
                  Category*
                </span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/*  */}

            {/* price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-base">Price*</span>
              </label>
              <input
                type="text"
                defaultValue={price}
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* discription */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-bold text-base">
                Recipe Details*
              </span>
            </label>
            <textarea
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-40"
              placeholder="Recipe Details"
            ></textarea>
          </div>

          {/* file input and pic */}
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input bg-[#F6F6F6] mb-6"
          />
          <div>
            <button className="btn bg-[#D1A054] text-base  hover:bg-[#D1A054] hover:text-white">
              Update menu Item <FaUtensils></FaUtensils>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
