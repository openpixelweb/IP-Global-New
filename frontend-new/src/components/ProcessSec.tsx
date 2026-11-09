import processData from "../data/processData.json";

// Define type for single item
interface ProcessItem {
    id: number;
    image: string;
    number: string;
    title: string;
    desc: string;
}

// Cast JSON to correct type
const typedProcessData = processData as ProcessItem[];

// Load images dynamically
const processImages = import.meta.glob("../assets/images/**/*", {
    eager: true,
    import: "default",
}) as Record<string, string>;

const ProcessSec: React.FC = () => {
    return (
        <>
            {typedProcessData.map((item) => {
                const imgSrc =
                    processImages[`../assets/images/${item.image}`] || "";

                return (
                    <div
                        className="col-xl-3 col-lg-6 col-md-6 col-sm-6"
                        key={item.id}
                    >
                        <div className="work-detail zoom_in">
                            <div className="image-prosess">
                                <img src={imgSrc} alt={item.title} />
                            </div>

                            <div className="proses-detail">
                                <div className="number-proses">{item.number}</div>
                                <p className="title-proses">{item.title}</p>
                                <p className="prosess-desc">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ProcessSec;
