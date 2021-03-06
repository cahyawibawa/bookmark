// navigation menu
(() => { "use strict";
    (() => { const e = document.querySelector("#menu-btn"),
            t = document.querySelector("#close-btn"),
            s = document.querySelector("#mobile-nav"),
            c = document.querySelector("header");
        e.addEventListener("click", (function() 
        { c.classList.remove("visible"), c.classList.add("hidden"),
        s.classList.add("show") 
    })),
        t.addEventListener("click", (function() { s.classList.remove("show"),
        c.classList.remove("hidden"), c.classList.add("visible") 
    }))
})(),

        (() => { const e = document.querySelector("header");
        window.addEventListener("scroll", (t => { const s = e.clientHeight;
            window.scrollY > s ? (e.classList.add("sticky"),
            setTimeout((() => e.classList.add("visible")),
            150)) : e.classList.remove("sticky", "visible") 
        })) 
        })(),

            (() => { const e = document.querySelectorAll(".accordion__trigger");
        function t(t) { t.preventDefault(); const s = this,
                c = document.querySelector(`#${this.dataset.target}`);
            e.forEach((t => { var i, r;
                ! function(e, t) { if (e === t) return !0 }(t, s) ? (i = s, r = c,
                    e.forEach((e => { e !== i && e.classList.remove("accordion__trigger--active") 
                })),
                    document.querySelectorAll(".accordion__body").forEach((e => { e !== r && (e.style.height = "0",
                    e.classList.remove("accordion__body--active")) 
                }))) 
                : function(e) { e.classList.toggle("accordion__trigger--active");
                        const t = document.querySelector(`#${e.dataset.target}`),
                        s = t.scrollHeight;
                    t.classList.toggle("accordion__body--active"),
                    t.classList.contains("accordion__body--active") ? t.style.height = `${s}px` : t.style.height = "0" }(s) })) }
        e.forEach((e => e.addEventListener("click", t)))
})(),
// ------------------------tab------------
(() => 
        { const e = document.querySelectorAll(".tab__trigger");
        function t(t) { t.preventDefault(), e.forEach((e => e.classList.remove("tab__trigger--active"))),
        this.classList.add("tab__trigger--active"),
        document.querySelectorAll(".tab__panel").forEach((e => e.classList.remove("tab__panel--active"))),
        document.querySelector(`${this.hash}`).classList.add("tab__panel--active") }
        e.forEach((e => e.addEventListener("click", t))) 
    })(),
    (() => 
        {
        function e({ field: e, message: t }) 
        { const s = document.querySelector(".error"),
                c = e.parentElement;
            c.classList.add("field-error");
            const i = document.createElement("div");
            i.classList.add("error"), i.innerHTML = `<p class="error-message color-white">${t}</p>`,
            s ? c.replaceChild(i, s) : c.appendChild(i) }
        document.querySelector("#contact-form").addEventListener("submit", (function(t) { t.preventDefault();
            const s = this.email.value.trim(); "" !== s ? /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(s) ? function(e) { const t = e.parentElement;
                t.classList.contains("field-error") && (t.classList.remove("field-error"),
                t.querySelector(".error").remove()) }(this.email) : e({ field: this.email, message: "Whoops, make sure it's an email" }) : e({ field: this.email, message: "Email is required" }) })) })() })();