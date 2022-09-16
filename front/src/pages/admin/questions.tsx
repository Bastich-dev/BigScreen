import gsap from "gsap";
import { useEffect } from "react";
export default function QuestionsPage() {
  useEffect(() => {
    gsap.set(".card", { opacity: 0, top: 20 });
    gsap.to(".card", { opacity: 1, top: 0, delay: 0.4, duration: 0.4 });
  }, []);
  return (
    <>
      <div className="card">
        <h1>Page Questions</h1>
        <p>Contenu</p>
      </div>
    </>
  );
}
