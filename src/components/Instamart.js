import { useState } from "react";
const Section = ({ title, description, isVisible, setisVisible }) => {



    return (
        <div className="border border-black p-2 m-2">
            <h1 className="font-bold text-xl">{title}</h1>


            {
                isVisible ?
                    <button type="button" className="underline" onClick={(() => setisVisible(false))}>
                        Hide
                    </button>
                    :
                    <button type="button" className="underline" onClick={(() => setisVisible(true))}>
                        Show
                    </button>
            }
            {isVisible && <p>{description} </p>}

        </div>
    );
};



const Instamart = () => {

    const [sectionConfig, setsectionConfig] = useState({
        showAbout: true,
        showTeam: false,
        showCareer: false,
    })
    return (
        <>
            <h1 className="text-4xl m-2 p-2">Instamart</h1>

            <Section
                title={"About Instamart"}
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ea veniam dignissimos numquam illum maiores. Cumque veritatis illo ipsam aspernatur mollitia adipisci consectetur molestias voluptas et corporis nobis, suscipit ut provident a nemo ullam dignissimos? Reiciendis similique fugiat velit veniam quae, autem labore perspiciatis hic praesentium explicabo ipsam illum molestiae soluta. Soluta cumque voluptatem debitis, cum ad dolor, ducimus aliquam deserunt ullam perspiciatis facilis dolorem aperiam dignissimos quos. Harum enim eius et ut optio est provident similique repudiandae aut sequi autem dicta voluptatum molestias, quibusdam consequuntur! Accusamus, cum sed. Hic, error corrupti expedita officia ipsum esse tenetur repudiandae. Earum, maiores!"}
                isVisible={sectionConfig.showAbout}
                setisVisible={() =>
                    setsectionConfig({
                        showAbout: true,
                        showTeam: false,
                        showCareer: false,
                    })
                }
            />
            <Section
                title={"Team Instamart"}
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ea veniam dignissimos numquam illum maiores. Cumque veritatis illo ipsam aspernatur mollitia adipisci consectetur molestias voluptas et corporis nobis, suscipit ut provident a nemo ullam dignissimos? Reiciendis similique fugiat velit veniam quae, autem labore perspiciatis hic praesentium explicabo ipsam illum molestiae soluta. Soluta cumque voluptatem debitis, cum ad dolor, ducimus aliquam deserunt ullam perspiciatis facilis dolorem aperiam dignissimos quos. Harum enim eius et ut optio est provident similique repudiandae aut sequi autem dicta voluptatum molestias, quibusdam consequuntur! Accusamus, cum sed. Hic, error corrupti expedita officia ipsum esse tenetur repudiandae. Earum, maiores!"}
                isVisible={sectionConfig.showTeam}
                setisVisible={() =>
                    setsectionConfig({
                        showAbout: false,
                        showTeam: true,
                        showCareer: false,
                    })
                }

            />
            <Section
                title={"Career Instamart"}
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ea veniam dignissimos numquam illum maiores. Cumque veritatis illo ipsam aspernatur mollitia adipisci consectetur molestias voluptas et corporis nobis, suscipit ut provident a nemo ullam dignissimos? Reiciendis similique fugiat velit veniam quae, autem labore perspiciatis hic praesentium explicabo ipsam illum molestiae soluta. Soluta cumque voluptatem debitis, cum ad dolor, ducimus aliquam deserunt ullam perspiciatis facilis dolorem aperiam dignissimos quos. Harum enim eius et ut optio est provident similique repudiandae aut sequi autem dicta voluptatum molestias, quibusdam consequuntur! Accusamus, cum sed. Hic, error corrupti expedita officia ipsum esse tenetur repudiandae. Earum, maiores!"}
                isVisible={sectionConfig.showCareer}
                setisVisible={() =>
                    setsectionConfig({
                        showAbout: false,
                        showTeam: false,
                        showCareer: true,
                    })
                }

            />

        </>
    );
};

export default Instamart;