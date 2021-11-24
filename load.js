


window.addEventListener('load', loader)

function loader() {
          const TLLOAD = gsap.timeline();

          TLLOAD
          .to('.load-container', {opacity:0, duration :1, delay:3})



          .add(() => {
            document.querySelector('.load-container').style.display =
            "none";
          })
}
