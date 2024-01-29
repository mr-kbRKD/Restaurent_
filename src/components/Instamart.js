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

    const [VisibleSectiion, setVisibleSection] = useState("career")
    return (
        <>
            <h1 className="text-4xl m-2 p-2">Instamart</h1>

            <Section
                title={"About Instamart"}
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ea veniam dignissimos numquam illum maiores. Cumque veritatis illo ipsam aspernatur mollitia adipisci consectetur molestias voluptas et corporis nobis, suscipit ut provident a nemo ullam dignissimos? Reiciendis similique fugiat velit veniam quae, autem labore perspiciatis hic praesentium explicabo ipsam illum molestiae soluta. Soluta cumque voluptatem debitis, cum ad dolor, ducimus aliquam deserunt ullam perspiciatis facilis dolorem aperiam dignissimos quos. Harum enim eius et ut optio est provident similique repudiandae aut sequi autem dicta voluptatum molestias, quibusdam consequuntur! Accusamus, cum sed. Hic, error corrupti expedita officia ipsum esse tenetur repudiandae. Earum, maiores!"}
                isVisible={VisibleSectiion === "about"}
                setisVisible={() => setVisibleSection("about")}
            />
            <Section
                title={"Team Instamart"}
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ea veniam dignissimos numquam illum maiores. Cumque veritatis illo ipsam aspernatur mollitia adipisci consectetur molestias voluptas et corporis nobis, suscipit ut provident a nemo ullam dignissimos? Reiciendis similique fugiat velit veniam quae, autem labore perspiciatis hic praesentium explicabo ipsam illum molestiae soluta. Soluta cumque voluptatem debitis, cum ad dolor, ducimus aliquam deserunt ullam perspiciatis facilis dolorem aperiam dignissimos quos. Harum enim eius et ut optio est provident similique repudiandae aut sequi autem dicta voluptatum molestias, quibusdam consequuntur! Accusamus, cum sed. Hic, error corrupti expedita officia ipsum esse tenetur repudiandae. Earum, maiores!"}
                isVisible={VisibleSectiion === "team"}
                setisVisible={() =>
                    setVisibleSection("team")
                }

            />
            <Section
                title={"Career Instamart"}
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ea veniam dignissimos numquam illum maiores. Cumque veritatis illo ipsam aspernatur mollitia adipisci consectetur molestias voluptas et corporis nobis, suscipit ut provident a nemo ullam dignissimos? Reiciendis similique fugiat velit veniam quae, autem labore perspiciatis hic praesentium explicabo ipsam illum molestiae soluta. Soluta cumque voluptatem debitis, cum ad dolor, ducimus aliquam deserunt ullam perspiciatis facilis dolorem aperiam dignissimos quos. Harum enim eius et ut optio est provident similique repudiandae aut sequi autem dicta voluptatum molestias, quibusdam consequuntur! Accusamus, cum sed. Hic, error corrupti expedita officia ipsum esse tenetur repudiandae. Earum, maiores!"}
                isVisible={VisibleSectiion === "career"}
                setisVisible={() =>
                    setVisibleSection("career")
                }

            />

        </>
    );
};

export default Instamart;