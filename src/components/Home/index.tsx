import { Link } from "react-router";

export default function home() {
    return (
        <>
            <section className="home">
                <article>
                <div>
                    <h4>So, you want to travel to</h4>
                    <p>
                        Let's face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on the edge of
                        it. Well, sit back, and relax because we'll give you a truly out
                        of this world experience!
                    </p>

                </div>
                </article>

                <article>
                    <button>
                        <Link to='/destination'>
                         Explore
                        </Link>
                    </button>
                </article>

              

            </section>
        </>
    );
}