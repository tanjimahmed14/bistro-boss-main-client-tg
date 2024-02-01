
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="font-inter w-4/12 mx-auto text-center my-14">
            <p className="text-[#D99904] text-base my-2 italic">--{subHeading}--</p>
            <h1 className="border-y-4 font-light text-4xl py-3">{heading}</h1>
        </div>
    );
};

export default SectionTitle;