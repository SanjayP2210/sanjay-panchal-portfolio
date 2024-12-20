"use strict";
emailjs.init({
    publicKey: "VUX9mnZNB3Y4yng2E",
});
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [122],
    {
        4275: function (e, s) {
            s.Z = { src: "./public/img/cancel.svg", height: 512, width: 512 };
        },
        6029: function (e, s) {
            s.Z = {
                src: "./public/img/hero/mobile-banner.png",
                height: 300,
                width: 300,
                blurDataURL:
                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAnIK//8QAHRAAAQQCAwAAAAAAAAAAAAAAAwECBBIAFBVBYv/aAAgBAQABPwAgo/CBqF2ysh1l89Z//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJBcf/aAAgBAgEBPwBbp//EABgRAAIDAAAAAAAAAAAAAAAAAAABAkJy/9oACAEDAQE/AJVyj//Z",
                blurWidth: 8,
                blurHeight: 8,
            };
        },
        8212: function (e, s, a) {
            var A = a(5893);
            a(7294);
            let l = () =>
                (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsxs)("p", {
                            className: "open-sans-font custom-span-contact position-relative",
                            children:
                                [
                                    (0, A.jsx)("a", {
                                        href: 'https://maps.app.goo.gl/vQDuRyBK1LnBUipB6',
                                        target: '_blank',
                                        rel: "noreferrer",
                                        children: [
                                            (0, A.jsx)("i", { className: "fa fa-map position-absolute" }),
                                            (0, A.jsx)("span", { className: "d-block", children: "Address Point" }), "24, Shanti nagar society, Chandlodiya, Ahmedabad - 382481."
                                        ]
                                    }
                                    ),
                                ],
                        }),
                        (0, A.jsxs)("p", {
                            className: "open-sans-font custom-span-contact position-relative",
                            children: [
                                (0, A.jsx)("i", { className: "fa fa-envelope-open position-absolute" }),
                                (0, A.jsx)("span", { className: "d-block", children: "mail me" }),
                                " ",
                                (0, A.jsx)("a", { href: "mailto:sanjaypanchal2210@gmail.com", children: "sanjaypanchal2210@gmail.com" }),
                            ],
                        }),
                        (0, A.jsxs)("p", {
                            className: "open-sans-font custom-span-contact position-relative",
                            children: [
                                (0, A.jsx)("i", { className: "fa fa-phone-square position-absolute" }),
                                (0, A.jsx)("span", { className: "d-block", children: "call me" }),
                                " ",
                                (0, A.jsx)("a", { href: "Tel: +91-9722224602", children: "+91-9722224602" }),
                            ],
                        }),
                    ],
                });
            s.Z = l;
        },
        6047: function (e, s, a) {
            var A = a(5893),
                l = a(7294),
                i = a(5247),
                c = a(5678);
            a(4213);
            let t = () => {
                let e = (0, l.useRef)(),
                    // s = (s) => {
                    //     s.preventDefault(),
                    //         i.ZP.a("service_alwb0dv", "template_ugoztxr", e.current).then(
                    //             (e) => {
                    //                 console.log(e),
                    //                     c.Am.success("Message Sent Successfully!", { position: "top-right", autoClose: 2e3, hideProgressBar: !1, closeOnClick: !0, pauseOnHover: !0, draggable: !0, progress: void 0 }),
                    //                     document.getElementById("myForm").reset();
                    //             },
                    //             (e) => {
                    //                 c.Am.error("Ops Message Not Sent!", { position: "top-right", autoClose: 2e3, hideProgressBar: !1, closeOnClick: !0, pauseOnHover: !0, draggable: !0, progress: void 0 });
                    //             }
                    //         );
                    // };
                    sendMessage = (s) => {
                        s.preventDefault();
                        console.log('sendMessage called', e.current);
                        const name = document.getElementsByName("name")[0].value;
                        const user_email = document.getElementsByName("user_email")[0].value;
                        const subject = document.getElementsByName("subject")[0].value;
                        const message = document.getElementsByName("message")[0].value;

                        // Validate inputs (optional but recommended)
                        if (!name || !user_email || !subject || !message) {
                            alert("Please fill out all fields.");
                            return;
                        }

                        const emailParams = {
                            name: name,
                            user_email: user_email,
                            subject: "Contact to Sanjay Panchal", // You can change the subject if needed
                            message: message,
                        };


                        emailjs.send('service_5f5cbnf', 'template_qhk84t9', emailParams)
                            .then(() => {
                                console.log(e),
                                    c.Am.success("Message Sent Successfully!", { position: "top-right", autoClose: 2e3, hideProgressBar: !1, closeOnClick: !0, pauseOnHover: !0, draggable: !0, progress: void 0 }),
                                    document.getElementById("myForm").reset();
                            })
                            .catch((error) => {
                                c.Am.error("Ops Message Not Sent!", { position: "top-right", autoClose: 2e3, hideProgressBar: !1, closeOnClick: !0, pauseOnHover: !0, draggable: !0, progress: void 0 });
                            });
                    };
                return (0, A.jsx)(A.Fragment, {
                    children: (0, A.jsx)("form", {
                        id: "myForm",
                        className: "contactform",
                        ref: e,
                        onSubmit: sendMessage,
                        children: (0, A.jsxs)("div", {
                            className: "row",
                            children: [
                                (0, A.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, A.jsx)("div", { className: "form-group", children: (0, A.jsx)("input", { type: "text", name: "name", placeholder: "YOUR NAME", required: !0 }) }),
                                }),
                                (0, A.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, A.jsx)("div", { className: "form-group", children: (0, A.jsx)("input", { type: "email", name: "user_email", placeholder: "YOUR EMAIL", required: !0 }) }),
                                }),
                                (0, A.jsx)("div", {
                                    className: "col-12 col-md-12",
                                    children: (0, A.jsx)("div", { className: "form-group", children: (0, A.jsx)("input", { type: "text", name: "subject", placeholder: "YOUR SUBJECT", required: !0 }) }),
                                }),
                                (0, A.jsx)("div", { className: "col-12", children: (0, A.jsx)("div", { className: "form-group", children: (0, A.jsx)("textarea", { name: "message", placeholder: "YOUR MESSAGE", required: !0 }) }) }),
                                (0, A.jsx)("div", {
                                    className: "col-12",
                                    children: (0, A.jsxs)("button", {
                                        type: "submit",
                                        className: "button",
                                        children: [(0, A.jsx)("span", { className: "button-text", children: "Send Message" }), (0, A.jsx)("span", { className: "button-icon fa fa-send" })],
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            };
            s.Z = t;
        },
        9830: function (e, s, a) {
            var A = a(5893);
            a(7294);
            let l = [
                { iconName: "fa fa-facebook", link: "https://www.facebook.com/sanjayp14594" },
                { iconName: "fa fa-instagram", link: "https://www.instagram.com/er._sanju/" },
                { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/sanjayp1994" },
                { iconName: "fa fa-whatsapp", link: "https://api.whatsapp.com/send?phone=%2B+9199722224602&text=hi" },
            ],
                i = () =>
                    (0, A.jsx)("ul", {
                        className: "social social_icon list-unstyled pt-1 mb-5",
                        children: l.map((e, s) => (0, A.jsx)("li", { children: (0, A.jsx)("a", { href: e.link, target: "_blank", rel: "noreferrer", children: (0, A.jsx)("i", { className: e.iconName }) }) }, s)),
                    });
            s.Z = i;
        },
        953: function (e, s, a) {
            a.d(s, {
                Z: function () {
                    return u;
                },
            });
            var A = a(5893);
            a(7294);
            let l = [
                { title: "7", subTitle1: "years of", subTitle2: "experience" },
                { title: "10", subTitle1: "completed", subTitle2: "projects" },
            ],
                i = () =>
                    (0, A.jsx)("div", {
                        className: "row",
                        children: l.map((e, s) =>
                            (0, A.jsx)(
                                "div",
                                {
                                    className: "col-6",
                                    children: (0, A.jsxs)("div", {
                                        className: "box-stats with-margin",
                                        children: [
                                            (0, A.jsx)("h3", { className: "poppins-font position-relative", children: e.title }),
                                            (0, A.jsxs)("p", { className: "open-sans-font m-0 position-relative text-uppercase", children: [e.subTitle1, " ", (0, A.jsx)("span", { className: "d-block", children: e.subTitle2 })] }),
                                        ],
                                    }),
                                },
                                s
                            )
                        ),
                    }),
                t = () =>
                    (0, A.jsx)("ul", {
                        children: educationLeftSideList.map((e, s) =>
                            (0, A.jsxs)(
                                "li",
                                {
                                    children: [
                                        (0, A.jsx)("div", { className: "icon", children: (0, A.jsx)("i", { className: "fa fa-book" }) }),
                                        (0, A.jsx)("span", { className: "time open-sans-font text-uppercase", children: e.year }),
                                        (0, A.jsxs)("h5", { className: "poppins-font text-uppercase", children: [e.position, (0, A.jsx)("span", { className: "place open-sans-font", children: e.compnayName })] }),
                                        (0, A.jsx)("p", { className: "open-sans-font", children: e.details }),
                                    ],
                                },
                                s
                            )
                        ),
                    }),
                educationList = [
                    { year: "2012 - 2016", position: "Silver Oak Colleage", colleageName: "Ahmedabad", details: "Bachlor of Engineer - 6.8 CGPA" },
                    { year: "2000 - 2010", position: "Bhavik Vidhyalay", colleageName: "Ahmedbadad", details: "S.S.C - 48%" },
                    { year: "2010 - 2012", position: "Mangal Deep Vidhyalay", colleageName: "Ahmedbadad", details: "H.S.C - 67%" },
                ],
                projectList = [
                    { projectName: "ABSLI -LEAP", details: "Insurance Project" },
                    { projectName: 'TTOYOU', details: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol\n        elit, tempor incididunt" },
                    { projectName: 'Make My Docs', details: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur\n        elit, sed do eiusmod tempor duntt" },
                ],
                experienceList = [
                    { compnayName: 'INEXTURE SOLUTIONS LLP', year: 'Feb, 2020 - Present', designation: 'Senior Full Stack Developer' },
                    { compnayName: 'Infinite Technology', year: 'Jul, 2016 - May,2018', designation: 'Backend Developer (.Net MVC)' },
                    { compnayName: 'Infomeck', year: 'May, 2018 - Feb, 2020', designation: 'Full Stack Developer (Angular, .Net MVC)' },
                ],
                getEducationRightList = () =>
                    (0, A.jsx)("ul", {
                        children: educationList.slice(0, 2).map((e, s) =>
                            (0, A.jsxs)(
                                "li",
                                {
                                    children: [
                                        (0, A.jsx)("div", { className: "icon", children: (0, A.jsx)("i", { className: "fa fa-book" }) }),
                                        (0, A.jsx)("span", { className: "time open-sans-font text-uppercase", children: e.year }),
                                        (0, A.jsxs)("h5", { className: "poppins-font text-uppercase", children: [e.position, (0, A.jsx)("span", { className: "place open-sans-font", children: e.colleageName })] }),
                                        (0, A.jsx)("p", { className: "open-sans-font", children: e.details }),
                                    ],
                                },
                                s
                            )
                        ),
                    }),
                getEducationLeftList = () =>
                    (0, A.jsx)("ul", {
                        children: educationList.slice(2, 3).map((e, s) =>
                            (0, A.jsxs)(
                                "li",
                                {
                                    children: [
                                        (0, A.jsx)("div", { className: "icon", children: (0, A.jsx)("i", { className: "fa fa-book" }) }),
                                        (0, A.jsx)("span", { className: "time open-sans-font text-uppercase", children: e.year }),
                                        (0, A.jsxs)("h5", { className: "poppins-font text-uppercase", children: [e.position, (0, A.jsx)("span", { className: "place open-sans-font", children: e.colleageName })] }),
                                        (0, A.jsx)("p", { className: "open-sans-font", children: e.details }),
                                    ],
                                },
                                s
                            )
                        ),
                    }),
                experienceRightListMap = () =>
                    (0, A.jsx)("ul", {
                        children: experienceList.slice(2, 3).map((e, s) =>
                            (0, A.jsxs)(
                                "li",
                                {
                                    children: [
                                        (0, A.jsx)("div", { className: "icon", children: (0, A.jsx)("i", { className: "fa fa-briefcase" }) }),
                                        (0, A.jsxs)("h5", {
                                            className: "poppins-font text-uppercase", children: [e.compnayName, (0, A.jsx)("span",
                                                { className: "place open-sans-font", children: e.designation })]
                                        }),
                                        (0, A.jsx)("p", { className: "open-sans-font", children: e.year }),
                                    ],
                                },
                                s
                            )
                        ),
                    }),
                experienceLeftListMap = () =>
                    (0, A.jsx)("ul", {
                        children: experienceList.slice(0, 2).map((e, s) =>
                            (0, A.jsxs)(
                                "li",
                                {
                                    children: [
                                        (0, A.jsx)("div", { className: "icon", children: (0, A.jsx)("i", { className: "fa fa-briefcase" }) }),
                                        (0, A.jsxs)("h5", {
                                            className: "poppins-font text-uppercase", children: [e.compnayName, (0, A.jsx)("span",
                                                { className: "place open-sans-font", children: e.designation })]
                                        }),
                                        (0, A.jsx)("p", { className: "open-sans-font", children: e.year }),
                                    ],
                                },
                                s
                            )
                        ),
                    }),
                projectListMap = () =>
                    (0, A.jsx)("ul", {
                        children: projectList.map((e, s) =>
                            (0, A.jsxs)(
                                "li",
                                {
                                    children: [
                                        (0, A.jsx)("div", { className: "icon", children: (0, A.jsx)("i", { className: "fa fa-briefcase" }) }),
                                        // (0, A.jsx)("span", { className: "time open-sans-font text-uppercase", children: e.projectName }),
                                        (0, A.jsxs)("h5", { className: "poppins-font text-uppercase", children: [e.projectName, (0, A.jsx)("span", { className: "place open-sans-font", children: e.compnayName })] }),
                                        (0, A.jsx)("p", { className: "open-sans-font", children: e.details }),
                                    ],
                                },
                                s
                            )
                        ),
                    }),
                r = [
                    { meta: "first name", metaInfo: "Sanjay", hasColor: "" },
                    { meta: "last name", metaInfo: "Panchal", hasColor: "" },
                    { meta: "Age", metaInfo: "31 Years", hasColor: "" },
                    { meta: "Nationality", metaInfo: "Indian", hasColor: "" },
                    { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
                    { meta: "Address", metaInfo: "Chandlodia, Ahmedebad", hasColor: "" },
                    { meta: "phone", metaInfo: "+91-9722224602", hasColor: "" },
                    { meta: "Email", metaInfo: "sanjaypanchal2210@gmail.com", hasColor: "" },
                    // { meta: "Skype", metaInfo: " steve.milner", hasColor: "" },
                    { meta: "langages", metaInfo: "English, Hindi, Gujarati", hasColor: "" },
                ],
                d = () =>
                    (0, A.jsx)("ul", {
                        className: "about-list list-unstyled open-sans-font",
                        children: r.map((e, s) =>
                            (0, A.jsxs)(
                                "li",
                                {
                                    children: [
                                        (0, A.jsxs)("span", { className: "title", children: [e.meta, ": "] }),
                                        (0, A.jsx)("span", { className: "value d-block d-sm-inline-block d-lg-block d-xl-inline-block ".concat(e.hasColor), children: e.metaInfo }),
                                    ],
                                },
                                s
                            )
                        ),
                    }),
                m = [
                    { skillClass: "p75", skillPercent: "75", skillName: "REACT" },
                    { skillClass: "p75", skillPercent: "75", skillName: "ANGULAR" },
                    { skillClass: "p60", skillPercent: "60", skillName: "NODEJS" },
                    { skillClass: "p60", skillPercent: "60", skillName: "MONGO" },
                    { skillClass: "p60", skillPercent: "60", skillName: "EXPRESS" },
                    { skillClass: "p80", skillPercent: "80", skillName: "HTML" },
                    { skillClass: "p80", skillPercent: "80", skillName: "JAVASCRIPT" },
                    { skillClass: "p80", skillPercent: "80", skillName: "CSS" },
                    { skillClass: "p60", skillPercent: "60", skillName: "JQUERY" },
                    { skillClass: "p40", skillPercent: "40", skillName: "AWS" },
                ],
                // h = () =>
                //     (0, A.jsx)(A.Fragment, {
                //         children: m.map((e, s) =>
                //             (0, A.jsxs)(
                //                 "div",
                //                 {
                //                     className: "col-6 col-md-3 mb-3 mb-sm-5",
                //                     children: [
                //                         (0, A.jsxs)("div", {
                //                             className: "c100 ".concat(e.skillClass),
                //                             children: [
                //                                 (0, A.jsxs)("span", { children: [e.skillPercent, "%"] }),
                //                                 (0, A.jsxs)("div", { className: "slice", children: [(0, A.jsx)("div", { className: "bar-div" }), (0, A.jsx)("div", { className: "fill-div" })] }),
                //                             ],
                //                         }),
                //                         (0, A.jsx)("h6", { className: "text-uppercase open-sans-font text-center mt-2 mt-sm-4", children: e.skillName }),
                //                     ],
                //                 },
                //                 s
                //             )
                //         ),
                //     }),
                percentageView = () =>
                        (0, A.jsx)(A.Fragment, {
                            children: m.map((e, s) =>
                                (0, A.jsxs)(
                                    "div",
                                    {
                                        className: "col-6 col-md-3 mb-3 mb-sm-5 percentage-bar",
                                        children: [
                                            (0, A.jsxs)("div", {
                                                className: "single-chart ",
                                                children: [
                                                    (0, A.jsxs)("svg", { 
                                                        className: "c100 p60 circular-chart orange", 
                                                        viewBox:"0 0 36 36",
                                                        children: [
                                                            (0, A.jsx)
                                                            ("path", 
                                                                { className: "circle-bg" ,
                                                                    d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                                                                }),
                                                                (0, A.jsx)
                                                            ("path", 
                                                                { className: "percentag-circle" ,
                                                                    strokeDasharray:`${e.skillPercent}, 100`,
                                                                    d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                                                                }),
                                                            ] 
                                                            }),
                                                    (0, A.jsxs)("text", {
                                                        class:"percentage",
                                                        children: [e.skillPercent, "%"] }),
                                                ],
                                            }),
                                            (0, A.jsx)("h6", { className: "text-uppercase open-sans-font text-center mt-2 mt-sm-4", children: e.skillName }),
                                        ],
                                    },
                                    s
                                )
                            ),
                        })
            var p = a(6029),
                x = a(5675),
                j = a.n(x);
            let g = () =>
                (0, A.jsx)("section", {
                    className: "main-content ",
                    children: (0, A.jsxs)("div", {
                        className: "container",
                        children: [
                            (0, A.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, A.jsx)("div", {
                                        className: "col-xl-6 col-lg-5 col-12",
                                        children: (0, A.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                (0, A.jsx)("div", { className: "col-12", children: (0, A.jsx)("h3", { className: "text-uppercase custom-title mb-0 ft-wt-600", children: "personal infos" }) }),
                                                (0, A.jsx)("div", { className: "col-12 d-block d-sm-none", children: (0, A.jsx)(j(), { src: p.Z, className: "about-logo img-fluid main-img-mobile", alt: "about avatar" }) }),
                                                (0, A.jsx)("div", { className: "col-12", children: (0, A.jsx)(d, {}) }),
                                                (0, A.jsx)("div", {
                                                    className: "col-12 mt-1",
                                                    children: (0, A.jsxs)("a", {
                                                        className: "button download-cv",
                                                        href: "./assets/pdf/Sanjay Panchal CV.pdf",
                                                        target: '_blank',
                                                        download: 'Sanjay Panchal CV.pdf',
                                                        children: [(0, A.jsx)("span", { className: "button-text", children: "Download CV" }), (0, A.jsx)("span", { className: "button-icon fa fa-download" })],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, A.jsx)("div", { className: "col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0", children: (0, A.jsx)(i, {}) }),
                                ],
                            }),
                            (0, A.jsx)("hr", { className: "separator" }),
                            (0, A.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, A.jsx)("div", { className: "col-12", children: (0, A.jsx)("h3", { className: "text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600 my-skills", children: "My Skills" }) }),
                                    // (0, A.jsx)(h, {}),
                                    (0, A.jsx)(percentageView, {}),
                                ],
                            }),
                            (0, A.jsx)("hr", { className: "separator mt-1" }),
                            (0, A.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, A.jsx)("div", {
                                        className: "col-12",
                                        children: (0, A.jsxs)("h3", { className: "text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600", children: ["", (0, A.jsx)("span", { children: "" }), " Education"] }),
                                    }),
                                    (0, A.jsx)("div", { className: "col-lg-6 m-15px-tb", children: (0, A.jsx)("div", { className: "resume-box", children: (0, A.jsx)(getEducationRightList, {}) }) }),
                                    (0, A.jsx)("div", { className: "col-lg-6 m-15px-tb", children: (0, A.jsx)("div", { className: "resume-box", children: (0, A.jsx)(getEducationLeftList, {}) }) }),
                                ],
                            }),
                            (0, A.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, A.jsx)("div", {
                                        className: "col-12",
                                        children: (0, A.jsxs)("h3", { className: "text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600", children: ["Experience "] }),
                                    }),
                                    (0, A.jsx)("div", { className: "col-lg-6 m-15px-tb", children: (0, A.jsx)("div", { className: "resume-box", children: (0, A.jsx)(experienceLeftListMap, {}) }) }),
                                    (0, A.jsx)("div", { className: "col-lg-6 m-15px-tb", children: (0, A.jsx)("div", { className: "resume-box", children: (0, A.jsx)(experienceRightListMap, {}) }) }),
                                ],
                            }),
                            // (0, A.jsxs)("div", {
                            //     className: "row",
                            //     children: [
                            //         (0, A.jsx)("div", {
                            //             className: "col-12",
                            //             children: (0, A.jsxs)("h3", { className: "text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600", children: ["Projects ", (0, A.jsx)("span", { children: "&" }), " Experience"] }),
                            //         }),
                            //         (0, A.jsx)("div", { className: "col-lg-6 m-15px-tb", children: (0, A.jsx)("div", { className: "resume-box", children: (0, A.jsx)(projectListMap, {}) }) }),
                            //         (0, A.jsx)("div", { className: "col-lg-6 m-15px-tb", children: (0, A.jsx)("div", { className: "resume-box", children: (0, A.jsx)(t, {}) }) }),
                            //     ],
                            // }),
                        ],
                    }),
                });
            var u = g;
        },
        4318: function (e, s, a) {
            a.d(s, {
                Z: function () {
                    return p;
                },
            });
            var A = a(5893),
                l = a(7294),
                i = a(3253),
                c = a.n(i),
                t = a(4275),
                o = { src: "public/media/quote.085e087d.svg", height: 349, width: 349 },
                n = a(8443);
            let r = () => (0, l.useContext)(n.I);
            var d = a(5675),
                m = a.n(d);
            let h = () => {
                let { singleData: e, isOpen: s, setIsOpen: a, blogsData: i, handleBlogsData: n } = r(),
                    d = (e) => {
                        n(e);
                    };
                return (
                    (0, l.useEffect)(() => {
                        c().setAppElement("#modal");
                    }, []),
                    (0, A.jsx)(A.Fragment, {
                        children: (0, A.jsx)("div", {
                            className: "row",
                            id: "modal",
                            children: i.map((l) =>
                                (0, A.jsxs)(
                                    "div",
                                    {
                                        className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                                        children: [
                                            (0, A.jsxs)("article", {
                                                className: "post-container",
                                                onClick: () => d(null == l ? void 0 : l.id),
                                                children: [
                                                    (0, A.jsx)("div", {
                                                        className: "post-thumb",
                                                        children: (0, A.jsx)("div", {
                                                            className: "d-block position-relative overflow-hidden",
                                                            children: (0, A.jsx)(m(), { src: null == l ? void 0 : l.img, className: "img-fluid", alt: "item.title" }),
                                                        }),
                                                    }),
                                                    (0, A.jsxs)("div", {
                                                        className: "post-content",
                                                        children: [
                                                            (0, A.jsx)("div", { className: "entry-header", children: (0, A.jsx)("h3", { children: null == l ? void 0 : l.title }) }),
                                                            (0, A.jsx)("div", { className: "entry-content open-sans-font", children: (0, A.jsx)("p", { children: null == l ? void 0 : l.description1.slice(0, 100) }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, A.jsx)(c(), {
                                                isOpen: s,
                                                onRequestClose: () => a(!1),
                                                contentLabel: "My dialog",
                                                className: "custom-modal dark",
                                                overlayClassName: "custom-overlay dark",
                                                closeTimeoutMS: 500,
                                                children: (0, A.jsxs)("div", {
                                                    children: [
                                                        (0, A.jsx)("button", { className: "close-modal fa fa-close", onClick: () => a(!1), children: (0, A.jsx)(m(), { src: t.Z, alt: "close icon" }) }),
                                                        (0, A.jsx)("div", {
                                                            className: "box_inner blog-post",
                                                            children: (0, A.jsxs)("article", {
                                                                children: [
                                                                    (0, A.jsxs)("div", {
                                                                        className: "title-section text-start text-sm-center",
                                                                        children: [(0, A.jsxs)("h1", { children: ["Post ", (0, A.jsx)("span", { children: "Details" })] }), (0, A.jsx)("span", { className: "title-bg", children: "posts" })],
                                                                    }),
                                                                    (0, A.jsxs)("div", {
                                                                        className: "meta open-sans-font",
                                                                        children: [
                                                                            (0, A.jsxs)("span", { children: [(0, A.jsx)("i", { className: "fa fa-user" }), " ", e.commentor] }),
                                                                            (0, A.jsxs)("span", { className: "date", children: [(0, A.jsx)("i", { className: "fa fa-calendar" }), " ", e.date] }),
                                                                            (0, A.jsxs)("span", { children: [(0, A.jsx)("i", { className: "fa fa-tags" }), " ", e.tag] }),
                                                                        ],
                                                                    }),
                                                                    (0, A.jsx)("h1", { children: null == e ? void 0 : e.title }),
                                                                    (0, A.jsx)(m(), { src: null == e ? void 0 : e.img, className: "img-fluid", alt: "Blog" }),
                                                                    (0, A.jsxs)("div", {
                                                                        className: "blog-excerpt open-sans-font pb-5",
                                                                        children: [
                                                                            (0, A.jsx)("p", { children: null == e ? void 0 : e.description1 }),
                                                                            (0, A.jsxs)("div", {
                                                                                className: "quotebox",
                                                                                children: [
                                                                                    (0, A.jsx)("div", { className: "icon", children: (0, A.jsx)(m(), { src: o, alt: "blog quote" }) }),
                                                                                    (0, A.jsx)("p", { children: null == e ? void 0 : e.description2 }),
                                                                                ],
                                                                            }),
                                                                            (0, A.jsx)("p", { children: null == e ? void 0 : e.description3 }),
                                                                            (0, A.jsx)("p", { children: null == e ? void 0 : e.description4 }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    },
                                    l.id
                                )
                            ),
                        }),
                    })
                );
            };
            var p = h;
        },
        3192: function (e, s, a) {
            var A = a(5893),
                l = a(7294),
                i = a(3253),
                c = a.n(i),
                t = a(6029),
                o = a(4275),
                n = a(953),
                r = a(5675),
                d = a.n(r);
            let m = {
                heroImage: "./public/img/hero/dark.jpg",
                heroMobileImage: t.Z,
                heroTitleName: "Sanjay Panchal",
                heroDesignation: "Web Developer",
                heroDescriptions:
                    "I love to create responsive and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch",
                heroBtn: "more about me",
            },
                h = () => {
                    let [e, s] = (0, l.useState)(!1);
                    function a() {
                        // s(!e);
                        document.getElementById('tab:r0:1').click()
                    }
                    return (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsxs)("div", {
                                className: "row home-details-container align-items-center",
                                children: [
                                    (0, A.jsx)("div", { className: "col-lg-4 bg position-fixed d-none d-lg-block", style: { backgroundImage: "url(".concat(m.heroImage, ")") } }),
                                    (0, A.jsx)("div", {
                                        className: "col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start",
                                        children: (0, A.jsxs)("div", {
                                            children: [
                                                (0, A.jsx)(d(), { src: m.heroMobileImage, className: "mobile-device-logo img-fluid main-img-mobile d-sm-block d-lg-none", alt: "hero man" }),
                                                // (0, A.jsxs)("h1", { className: "text-uppercase poppins-font", children: ["I'm", " ", m.heroTitleName, ".", (0, A.jsx)("span", { children: m.heroDesignation })] }),
                                                (0, A.jsxs)("h1", {
                                                    className: "text-uppercase poppins-font",
                                                    children: [
                                                        "I'm",
                                                        " ",
                                                        m.heroTitleName,
                                                        //   (0, A.jsx)("span", { children: m.heroDesignation }),
                                                        (0, A.jsx)("span", {
                                                            className: "header-caption",
                                                            id: "page-top",
                                                            children: [
                                                                (0, A.jsx)("span", {
                                                                    className: "cd-headline clip is-full-width",
                                                                    children: [
                                                                        //   (0, A.jsx)("span", { children: "a " }),
                                                                        (0, A.jsx)("span", {
                                                                            className: "cd-words-wrapper",
                                                                            children: [
                                                                                (0, A.jsx)("b", { className: "is-visible", children: "Full Stack Developer." }),
                                                                                (0, A.jsx)("b", { className: "is-hidden", children: "Professional Coder." }),
                                                                                //   (0, A.jsx)("b", { className: "is-hidden", children: "Full Stack Developer." })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, A.jsx)("p", { className: "open-sans-font", children: m.heroDescriptions }),
                                                (0, A.jsxs)("button", {
                                                    className: "button",
                                                    onClick: a,
                                                    children: [(0, A.jsx)("span", { className: "button-text", children: m.heroBtn }), (0, A.jsx)("span", { className: "button-icon fa fa-arrow-right" })],
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, A.jsx)(c(), {
                                isOpen: e,
                                onRequestClose: a,
                                contentLabel: "My dialog",
                                className: "custom-modal dark hero",
                                overlayClassName: "custom-overlay dark",
                                closeTimeoutMS: 500,
                                children: (0, A.jsxs)("div", {
                                    children: [
                                        (0, A.jsx)("button", { className: "close-modal", onClick: a, children: (0, A.jsx)(d(), { src: o.Z, alt: "close icon" }) }),
                                        (0, A.jsx)("div", {
                                            className: "box_inner about",
                                            children: (0, A.jsxs)("div", {
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                children: [
                                                    (0, A.jsxs)("div", {
                                                        className: "title-section text-start text-sm-center",
                                                        children: [(0, A.jsxs)("h1", { children: ["ABOUT ", (0, A.jsx)("span", { children: "ME" })] }), (0, A.jsx)("span", { className: "title-bg", children: "Resume" })],
                                                    }),
                                                    (0, A.jsx)(n.Z, {}),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
            s.Z = h;
        },
        1349: function (e, s, a) {
            a.d(s, {
                Z: function () {
                    return C;
                },
            });
            var A = a(5893),
                l = a(7294),
                i = a(776),
                projectList = [
                    {
                        id: 1,
                        type: "ABSLI",
                        image: {
                            src: "public/media/absli-image.png",
                            height: 552,
                            width: 895,
                            blurDataURL:
                                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAoAf/xAAaEAACAgMAAAAAAAAAAAAAAAABEQIhAAQi/9oACAEBAAE/AN9iMDBDu6bGf//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AK//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCP/9k=",
                            blurWidth: 8,
                            blurHeight: 5,
                        },
                        tag: ["insurance"],
                        delayAnimation: "0",
                        modalDetails: [{
                            project: "ABSLI LEAP",
                            client: "Aditya Birla",
                            language: "React, Node, Express, Mongo, HTML, CSS, Javascript",
                            preview: "www.leap.adityabirlasunlifeinsurance.com/",
                            link: "https://leap.adityabirlasunlifeinsurance.com/"
                        }],
                    },
                    {
                        id: 2,
                        type: "ttoyou",
                        image: {
                            src: "public/media/ttoyou-image.png",
                            height: 552,
                            width: 895,
                            blurDataURL:
                                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAowh//8QAGRABAAIDAAAAAAAAAAAAAAAAAgMFABES/9oACAEBAAE/AKm1msoGmCONZ//EABgRAQADAQAAAAAAAAAAAAAAAAEAAgMx/9oACAECAQE/AMVtlRepP//EABcRAQADAAAAAAAAAAAAAAAAAAIAAyH/2gAIAQMBAT8Asxqf/9k=",
                            blurWidth: 8,
                            blurHeight: 5,
                        },
                        tag: ["social"],
                        delayAnimation: "100",
                        modalDetails: [{
                            project: "ttoyou",
                            client: "ttoyou",
                            language: "Angular, Node, Express, Mongo, HTML, CSS, JS",
                            preview: "www.ttoyou.com", link: "https://ttoyou.com/landing"
                        }],
                    },
                    {
                        id: 3,
                        type: "My Products",
                        image: {
                            src: "public/media/my-product-image.png",
                            height: 552,
                            width: 895,
                            blurDataURL:
                                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAuAH/xAAZEAADAAMAAAAAAAAAAAAAAAABAgMAEUH/2gAIAQEAAT8AirBqbYnuf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
                            blurWidth: 8,
                            blurHeight: 5,
                        },
                        tag: ['eccomerce'],
                        delayAnimation: "200",
                        modalDetails: [{
                            project: "My Products",
                            client: "Sanjay Panchal",
                            language: "React, Node, Express, Mongo, HTML, CSS, Javascript",
                            preview: "https://my-products-site-app.vercel.app/",
                            link: "https://my-products-site-app.vercel.app/"
                        }],
                    },
                    {
                        id: 4,
                        type: "Mahakali Furniture",
                        image: {
                            src: "public/media/mahakali-furniture-image.png",
                            height: 552,
                            width: 895,
                            blurDataURL:
                                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALMS/wD/xAAZEAADAQEBAAAAAAAAAAAAAAABAgMRADH/2gAIAQEAAT8AipelmdvKEADczO//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Ar//Z",
                            blurWidth: 8,
                            blurHeight: 5,
                        },
                        tag: ["furniture"],
                        delayAnimation: "0",
                        modalDetails: [{
                            project: "Mahakali Furniture",
                            client: "Kalpesh Poraniya",
                            language: "HTML, CSS, Javascript",
                            preview: "https://mahakali-furniture.netlify.app/",
                            link: "https://mahakali-furniture.netlify.app/"
                        }],
                    },
                    {
                        id: 5,
                        type: "Insurance House",
                        image: {
                            src: "public/media/insurance-house-image.png",
                            height: 552,
                            width: 895,
                            blurDataURL:
                                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKgWH//EABkQAAEFAAAAAAAAAAAAAAAAAAABAgUhIv/aAAgBAQABPwCScu7P/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",
                            blurWidth: 8,
                            blurHeight: 5,
                        },
                        tag: ["insurance"],
                        delayAnimation: "100",
                        modalDetails: [{
                            project: "Insurance House",
                            client: "Insurance House",
                            language: "Angular, HTML, CSS, Javascript, Jquery, AJAX",
                            preview: "https://www.insurancehouse.in/#/home",
                            link: "https://www.insurancehouse.in/#/home"
                        }],
                    },
                    {
                        id: 6,
                        type: "Bill Generator",
                        image: {
                            src: "public/media/bill-generator-image.png",
                            height: 552,
                            width: 895,
                            blurDataURL:
                                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQT/2gAMAwEAAhADEAAAALsMn//EABYQAAMAAAAAAAAAAAAAAAAAAAADMv/aAAgBAQABPwBcn//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AI//xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAIAQMBAT8AdN//2Q==",
                            blurWidth: 8,
                            blurHeight: 5,
                        },
                        tag: ["billing"],
                        delayAnimation: "200",
                        modalDetails: [{
                            project: "Bill Generator",
                            client: "Sanjay Panchal",
                            language: "React, Node, Mongo, Express, HTML, CSS, Javascript",
                            preview: "www.bill-generation.vercel.app",
                            link: "https://bill-generation.vercel.app/"
                        }],
                    },
                    // {
                    //     id: 7,
                    //     type: "facebook project",
                    //     image: {
                    //         src: "public/media/project-7.jpg",
                    //         height: 552,
                    //         width: 895,
                    //         blurDataURL:
                    //             "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKOC/wD/xAAbEAABBAMAAAAAAAAAAAAAAAACAQMREgAEIf/aAAgBAQABPwB8jTYZBK1KZlO5/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECMnH/2gAIAQIBAT8AVp6f/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAAyFCwf/aAAgBAwEBPwBwAlWNez//2Q==",
                    //         blurWidth: 8,
                    //         blurHeight: 5,
                    //     },
                    //     tag: ["logo"],
                    //     delayAnimation: "0",
                    //     modalDetails: [{ project: "Website", client: "Facebook", language: "HTML, CSS, Javascript", preview: "www.facebook.com", link: "https://www.facebook.com/ibthemes" }],
                    // },
                    // {
                    //     id: 8,
                    //     type: "dribble project",
                    //     image: {
                    //         src: "public/media/project-8.jpg",
                    //         height: 552,
                    //         width: 895,
                    //         blurDataURL:
                    //             "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKwGf//EABwQAAIBBQEAAAAAAAAAAAAAAAECAwASEyJBUf/aAAgBAQABPwBkYzRvkNoB04T7X//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABcRAQADAAAAAAAAAAAAAAAAAAEAEmH/2gAIAQMBAT8AALaz/9k=",
                    //         blurWidth: 8,
                    //         blurHeight: 5,
                    //     },
                    //     tag: ["graphic design"],
                    //     delayAnimation: "100",
                    //     modalDetails: [{ project: "Website", client: "Dribbble", language: "HTML, CSS, Javascript", preview: "www.dribbble.com", link: "https://dribbble.com/ib-themes" }],
                    // },
                    // {
                    //     id: 9,
                    //     type: "behence project",
                    //     image: {
                    //         src: "public/media/project-9.jpg",
                    //         height: 552,
                    //         width: 895,
                    //         blurDataURL:
                    //             "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAsgj/AP/EABwQAAEDBQAAAAAAAAAAAAAAAAIAERIBAyJxkf/aAAgBAQABPwAbNHnM9Pjxf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
                    //         blurWidth: 8,
                    //         blurHeight: 5,
                    //     },
                    //     tag: ["graphic design", "mockup"],
                    //     delayAnimation: "200",
                    //     modalDetails: [{ project: "Website", client: "Behance", language: "HTML, CSS, Javascript", preview: "www.behance.com", link: "https://www.behance.net/ib-themes" }],
                    // },
                ],
                n = a(5675),
                r = a.n(n),
                d = a(4275);
            let singleImagePopup = (e) => {
                let { modalId: s, setGetModal: a } = e;
                return (0, A.jsxs)("div", {
                    className: "modal_portfolio ",
                    children: [
                        (0, A.jsx)("div", { className: "modal__outside", onClick: () => a(!1) }),
                        (0, A.jsx)("div", {}),
                        (0, A.jsx)("div", {
                            className: "modal__content",
                            children: projectList
                                .filter((e) => e.id === s)
                                .map((e) =>
                                    (0, A.jsxs)(
                                        "div",
                                        {
                                            "data-aos": "fade",
                                            children: [
                                                (0, A.jsx)("h2", { className: "heading mb-2", children: e.type }),
                                                (0, A.jsx)("div", {
                                                    className: "modal__details",
                                                    children: e.modalDetails.map((e, s) =>
                                                        (0, A.jsxs)(
                                                            "div",
                                                            {
                                                                className: "row open-sans-font",
                                                                children: [
                                                                    (0, A.jsxs)("div", {
                                                                        className: "col-12 col-sm-6 mb-2",
                                                                        children: [
                                                                            (0, A.jsx)("i", { className: "fa fa-file-text-o pr-2" }),
                                                                            "Project:",
                                                                            " ",
                                                                            (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.project }),
                                                                        ],
                                                                    }),
                                                                    (0, A.jsxs)("div", {
                                                                        className: "col-12 col-sm-6 mb-2",
                                                                        children: [(0, A.jsx)("i", { className: "fa fa-user-o pr-2" }), "Client :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.client })],
                                                                    }),
                                                                    (0, A.jsxs)("div", {
                                                                        className: "col-12 col-sm-6 mb-2",
                                                                        children: [(0, A.jsx)("i", { className: "fa fa-code pr-2" }), "Language :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.language })],
                                                                    }),
                                                                    (0, A.jsxs)("div", {
                                                                        className: "col-12 col-sm-6 mb-2",
                                                                        children: [
                                                                            (0, A.jsx)("i", { className: "fa fa-external-link pr-2" }),
                                                                            "Preview :",
                                                                            " ",
                                                                            (0, A.jsx)("a", { className: "preview-link", target: "_blank", rel: "noopener noreferrer nofollow", href: e.link, children: e.preview }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            },
                                                            s
                                                        )
                                                    ),
                                                }),
                                                (0, A.jsx)("figure", { className: "modal__img", children: (0, A.jsx)(r(), { src: e.image, alt: "portfolio project demo" }) }),
                                                (0, A.jsx)("button", { className: "close-modal", onClick: () => a(!1), children: (0, A.jsx)(r(), { src: d.Z, alt: "portfolio project demo" }) }),
                                            ],
                                        },
                                        e.id
                                    )
                                ),
                        }),
                    ],
                });
            },
                videocontainer = (e) => {
                    let { modalId: s, setGetModal: a } = e;
                    return (0, A.jsxs)("div", {
                        className: "modal_portfolio",
                        children: [
                            (0, A.jsx)("div", { className: "modal__outside", onClick: () => a(!1) }),
                            (0, A.jsx)("div", {
                                className: "modal__content",
                                children: projectList
                                    .filter((e) => e.id === s)
                                    .map((e) =>
                                        (0, A.jsxs)(
                                            "div",
                                            {
                                                "data-aos": "fade",
                                                children: [
                                                    (0, A.jsx)("h2", { className: "heading mb-2", children: e.type }),
                                                    (0, A.jsx)("div", {
                                                        className: "modal__details",
                                                        children: e.modalDetails.map((e, s) =>
                                                            (0, A.jsxs)(
                                                                "div",
                                                                {
                                                                    className: "row open-sans-font",
                                                                    children: [
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-file-text-o pr-2" }),
                                                                                "Project:",
                                                                                " ",
                                                                                (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.project }),
                                                                            ],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-user-o pr-2" }), "Client :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.client })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-code pr-2" }), "Language :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.language })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-external-link pr-2" }),
                                                                                "Preview :",
                                                                                " ",
                                                                                (0, A.jsx)("a", { className: "preview-link", target: "_blank", rel: "noopener noreferrer nofollow", href: e.link, children: e.preview }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                s
                                                            )
                                                        ),
                                                    }),
                                                    (0, A.jsx)("figure", {
                                                        className: "modal__img videocontainer",
                                                        children: (0, A.jsx)("iframe", { src: "https://www.youtube.com/embed/7e90gBu4pas", title: "YouTube video player", className: "youtube-video", allowFullScreen: !0 }),
                                                    }),
                                                    (0, A.jsx)("button", { className: "close-modal", onClick: () => a(!1), children: (0, A.jsx)(r(), { src: d.Z, alt: "portfolio project demo" }) }),
                                                ],
                                            },
                                            e.id
                                        )
                                    ),
                            }),
                        ],
                    });
                };
            var p = a(6066);
            a(1548), a(3873);
            let x = (e) => {
                let { modalId: s, setGetModal: a } = e,
                    l = { dots: !0, infinite: !0, speed: 500, slidesToShow: 1, slidesToScroll: 1, draggable: !0 };
                return (0, A.jsxs)("div", {
                    className: "modal_portfolio",
                    children: [
                        (0, A.jsx)("div", { className: "modal__outside", onClick: () => a(!1) }),
                        (0, A.jsx)("div", {
                            className: "modal__content",
                            children: projectList
                                .filter((e) => e.id === s)
                                .map((e) =>
                                    (0, A.jsxs)(
                                        "div",
                                        {
                                            "data-aos": "fade",
                                            children: [
                                                (0, A.jsx)("h2", { className: "heading mb-2", children: e.type }),
                                                (0, A.jsx)("div", {
                                                    className: "modal__details",
                                                    children: e.modalDetails.map((e, s) =>
                                                        (0, A.jsxs)(
                                                            "div",
                                                            {
                                                                className: "row open-sans-font",
                                                                children: [
                                                                    (0, A.jsxs)("div", {
                                                                        className: "col-12 col-sm-6 mb-2",
                                                                        children: [
                                                                            (0, A.jsx)("i", { className: "fa fa-file-text-o pr-2" }),
                                                                            "Project:",
                                                                            " ",
                                                                            (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.project }),
                                                                        ],
                                                                    }),
                                                                    (0, A.jsxs)("div", {
                                                                        className: "col-12 col-sm-6 mb-2",
                                                                        children: [(0, A.jsx)("i", { className: "fa fa-user-o pr-2" }), "Client :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.client })],
                                                                    }),
                                                                    (0, A.jsxs)("div", {
                                                                        className: "col-12 col-sm-6 mb-2",
                                                                        children: [(0, A.jsx)("i", { className: "fa fa-code pr-2" }), "Language :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.language })],
                                                                    }),
                                                                    (0, A.jsxs)("div", {
                                                                        className: "col-12 col-sm-6 mb-2",
                                                                        children: [
                                                                            (0, A.jsx)("i", { className: "fa fa-external-link pr-2" }),
                                                                            "Preview :",
                                                                            " ",
                                                                            (0, A.jsx)("a", { className: "preview-link", target: "_blank", rel: "noopener noreferrer nofollow", href: e.link, children: e.preview }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            },
                                                            s
                                                        )
                                                    ),
                                                }),
                                                (0, A.jsx)("figure", {
                                                    className: "modal__img",
                                                    children: (0, A.jsxs)(p.Z, {
                                                        ...l,
                                                        children: [
                                                            (0, A.jsx)("div", { children: (0, A.jsx)(r(), { src: e.image, alt: "portfolio project demo" }) }),
                                                            (0, A.jsx)("div", { children: (0, A.jsx)(r(), { src: projectList[0], alt: "portfolio project demo" }) }),
                                                            (0, A.jsx)("div", { children: (0, A.jsx)(r(), { src: projectList[1], alt: "portfolio project demo" }) }),
                                                        ],
                                                    }),
                                                }),
                                                (0, A.jsx)("button", { className: "close-modal", onClick: () => a(!1), children: (0, A.jsx)(r(), { src: d.Z, alt: "portfolio project demo" }) }),
                                            ],
                                        },
                                        e.id
                                    )
                                ),
                        }),
                    ],
                });
            },
                j = (e) => {
                    let { modalId: s, setGetModal: a } = e;
                    return (0, A.jsxs)("div", {
                        className: "modal_portfolio",
                        children: [
                            (0, A.jsx)("div", { className: "modal__outside", onClick: () => a(!1) }),
                            (0, A.jsx)("div", {
                                className: "modal__content",
                                children: projectList
                                    .filter((e) => e.id === s)
                                    .map((e) =>
                                        (0, A.jsxs)(
                                            "div",
                                            {
                                                "data-aos": "fade",
                                                children: [
                                                    (0, A.jsx)("h2", { className: "heading mb-2", children: e.type }),
                                                    (0, A.jsx)("div", {
                                                        className: "modal__details",
                                                        children: e.modalDetails.map((e, s) =>
                                                            (0, A.jsxs)(
                                                                "div",
                                                                {
                                                                    className: "row open-sans-font",
                                                                    children: [
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-file-text-o pr-2" }),
                                                                                "Project:",
                                                                                " ",
                                                                                (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.project }),
                                                                            ],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-user-o pr-2" }), "Client :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.client })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-code pr-2" }), "Language :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.language })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-external-link pr-2" }),
                                                                                "Preview :",
                                                                                " ",
                                                                                (0, A.jsx)("a", { className: "preview-link", target: "_blank", rel: "noopener noreferrer nofollow", href: e.link, children: e.preview }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                s
                                                            )
                                                        ),
                                                    }),
                                                    (0, A.jsx)("figure", {
                                                        className: "modal__img",
                                                        children: (0, A.jsx)("video", {
                                                            id: "video",
                                                            className: "responsive-video",
                                                            controls: !0,
                                                            poster: e.image,
                                                            children: (0, A.jsx)("source", { src: "/assets/img/portfolio/video.mp4", type: "video/mp4" }),
                                                        }),
                                                    }),
                                                    (0, A.jsx)("button", { className: "close-modal", onClick: () => a(!1), children: (0, A.jsx)(r(), { src: d.Z, alt: "portfolio project demo" }) }),
                                                ],
                                            },
                                            e.id
                                        )
                                    ),
                            }),
                        ],
                    });
                },
                g = (e) => {
                    let { modalId: s, setGetModal: a } = e;
                    return (0, A.jsxs)("div", {
                        className: "modal_portfolio",
                        children: [
                            (0, A.jsx)("div", { className: "modal__outside", onClick: () => a(!1) }),
                            (0, A.jsx)("div", {
                                className: "modal__content",
                                children: projectList
                                    .filter((e) => e.id === s)
                                    .map((e) =>
                                        (0, A.jsxs)(
                                            "div",
                                            {
                                                "data-aos": "fade",
                                                children: [
                                                    (0, A.jsx)("h2", { className: "heading mb-2", children: e.type }),
                                                    (0, A.jsx)("div", {
                                                        className: "modal__details",
                                                        children: e.modalDetails.map((e, s) =>
                                                            (0, A.jsxs)(
                                                                "div",
                                                                {
                                                                    className: "row open-sans-font",
                                                                    children: [
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-file-text-o pr-2" }),
                                                                                "Project:",
                                                                                " ",
                                                                                (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.project }),
                                                                            ],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-user-o pr-2" }), "Client :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.client })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-code pr-2" }), "Language :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.language })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-external-link pr-2" }),
                                                                                "Preview :",
                                                                                " ",
                                                                                (0, A.jsx)("a", { className: "preview-link", target: "_blank", rel: "noopener noreferrer nofollow", href: e.link, children: e.preview }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                s
                                                            )
                                                        ),
                                                    }),
                                                    (0, A.jsx)("figure", { className: "modal__img", children: (0, A.jsx)(r(), { src: e.image, alt: "portfolio project demo" }) }),
                                                    (0, A.jsx)("button", { className: "close-modal", onClick: () => a(!1), children: (0, A.jsx)(r(), { src: d.Z, alt: "portfolio project demo" }) }),
                                                ],
                                            },
                                            e.id
                                        )
                                    ),
                            }),
                        ],
                    });
                },
                u = (e) => {
                    let { modalId: s, setGetModal: a } = e;
                    return (0, A.jsxs)("div", {
                        className: "modal_portfolio",
                        children: [
                            (0, A.jsx)("div", { className: "modal__outside", onClick: () => a(!1) }),
                            (0, A.jsx)("div", {
                                className: "modal__content",
                                children: projectList
                                    .filter((e) => e.id === s)
                                    .map((e) =>
                                        (0, A.jsxs)(
                                            "div",
                                            {
                                                "data-aos": "fade",
                                                children: [
                                                    (0, A.jsx)("h2", { className: "heading mb-2", children: e.type }),
                                                    (0, A.jsx)("div", {
                                                        className: "modal__details",
                                                        children: e.modalDetails.map((e, s) =>
                                                            (0, A.jsxs)(
                                                                "div",
                                                                {
                                                                    className: "row open-sans-font",
                                                                    children: [
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-file-text-o pr-2" }),
                                                                                "Project:",
                                                                                " ",
                                                                                (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.project }),
                                                                            ],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-user-o pr-2" }), "Client :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.client })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-code pr-2" }), "Language :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.language })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-external-link pr-2" }),
                                                                                "Preview :",
                                                                                " ",
                                                                                (0, A.jsx)("a", { className: "preview-link", target: "_blank", rel: "noopener noreferrer nofollow", href: e.link, children: e.preview }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                s
                                                            )
                                                        ),
                                                    }),
                                                    (0, A.jsx)("figure", { className: "modal__img", children: (0, A.jsx)(r(), { src: e.image, alt: "portfolio project demo" }) }),
                                                    (0, A.jsx)("button", { className: "close-modal", onClick: () => a(!1), children: (0, A.jsx)(r(), { src: d.Z, alt: "portfolio project demo" }) }),
                                                ],
                                            },
                                            e.id
                                        )
                                    ),
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { modalId: s, setGetModal: a } = e;
                    return (0, A.jsxs)("div", {
                        className: "modal_portfolio",
                        children: [
                            (0, A.jsx)("div", { className: "modal__outside", onClick: () => a(!1) }),
                            (0, A.jsx)("div", {
                                className: "modal__content",
                                children: projectList
                                    .filter((e) => e.id === s)
                                    .map((e) =>
                                        (0, A.jsxs)(
                                            "div",
                                            {
                                                "data-aos": "fade",
                                                children: [
                                                    (0, A.jsx)("h2", { className: "heading mb-2", children: e.type }),
                                                    (0, A.jsx)("div", {
                                                        className: "modal__details",
                                                        children: e.modalDetails.map((e, s) =>
                                                            (0, A.jsxs)(
                                                                "div",
                                                                {
                                                                    className: "row open-sans-font",
                                                                    children: [
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-file-text-o pr-2" }),
                                                                                "Project:",
                                                                                " ",
                                                                                (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.project }),
                                                                            ],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-user-o pr-2" }), "Client :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.client })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-code pr-2" }), "Language :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.language })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-external-link pr-2" }),
                                                                                "Preview :",
                                                                                " ",
                                                                                (0, A.jsx)("a", { className: "preview-link", target: "_blank", rel: "noopener noreferrer nofollow", href: e.link, children: e.preview }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                s
                                                            )
                                                        ),
                                                    }),
                                                    (0, A.jsx)("figure", { className: "modal__img", children: (0, A.jsx)(r(), { src: e.image, alt: "portfolio project demo" }) }),
                                                    (0, A.jsx)("button", { className: "close-modal", onClick: () => a(!1), children: (0, A.jsx)(r(), { src: d.Z, alt: "portfolio project demo" }) }),
                                                ],
                                            },
                                            e.id
                                        )
                                    ),
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { modalId: s, setGetModal: a } = e;
                    return (0, A.jsxs)("div", {
                        className: "modal_portfolio",
                        children: [
                            (0, A.jsx)("div", { className: "modal__outside", onClick: () => a(!1) }),
                            (0, A.jsx)("div", {
                                className: "modal__content",
                                children: projectList
                                    .filter((e) => e.id === s)
                                    .map((e) =>
                                        (0, A.jsxs)(
                                            "div",
                                            {
                                                "data-aos": "fade",
                                                children: [
                                                    (0, A.jsx)("h2", { className: "heading mb-2", children: e.type }),
                                                    (0, A.jsx)("div", {
                                                        className: "modal__details",
                                                        children: e.modalDetails.map((e, s) =>
                                                            (0, A.jsxs)(
                                                                "div",
                                                                {
                                                                    className: "row open-sans-font",
                                                                    children: [
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-file-text-o pr-2" }),
                                                                                "Project:",
                                                                                " ",
                                                                                (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.project }),
                                                                            ],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-user-o pr-2" }), "Client :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.client })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-code pr-2" }), "Language :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.language })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-external-link pr-2" }),
                                                                                "Preview :",
                                                                                " ",
                                                                                (0, A.jsx)("a", { className: "preview-link", target: "_blank", rel: "noopener noreferrer nofollow", href: e.link, children: e.preview }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                s
                                                            )
                                                        ),
                                                    }),
                                                    (0, A.jsx)("figure", { className: "modal__img", children: (0, A.jsx)(r(), { src: e.image, alt: "portfolio project demo" }) }),
                                                    (0, A.jsx)("button", { className: "close-modal", onClick: () => a(!1), children: (0, A.jsx)(r(), { src: d.Z, alt: "portfolio project demo" }) }),
                                                ],
                                            },
                                            e.id
                                        )
                                    ),
                            }),
                        ],
                    });
                },
                v = (e) => {
                    let { modalId: s, setGetModal: a } = e;
                    return (0, A.jsxs)("div", {
                        className: "modal_portfolio",
                        children: [
                            (0, A.jsx)("div", { className: "modal__outside", onClick: () => a(!1) }),
                            (0, A.jsx)("div", {
                                className: "modal__content",
                                children: projectList
                                    .filter((e) => e.id === s)
                                    .map((e) =>
                                        (0, A.jsxs)(
                                            "div",
                                            {
                                                "data-aos": "fade",
                                                children: [
                                                    (0, A.jsx)("h2", { className: "heading mb-2", children: e.type }),
                                                    (0, A.jsx)("div", {
                                                        className: "modal__details",
                                                        children: e.modalDetails.map((e, s) =>
                                                            (0, A.jsxs)(
                                                                "div",
                                                                {
                                                                    className: "row open-sans-font",
                                                                    children: [
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-file-text-o pr-2" }),
                                                                                "Project:",
                                                                                " ",
                                                                                (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.project }),
                                                                            ],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-user-o pr-2" }), "Client :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.client })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [(0, A.jsx)("i", { className: "fa fa-code pr-2" }), "Language :", " ", (0, A.jsx)("span", { className: "ft-wt-600 uppercase", children: e.language })],
                                                                        }),
                                                                        (0, A.jsxs)("div", {
                                                                            className: "col-12 col-sm-6 mb-2",
                                                                            children: [
                                                                                (0, A.jsx)("i", { className: "fa fa-external-link pr-2" }),
                                                                                "Preview :",
                                                                                " ",
                                                                                (0, A.jsx)("a", { className: "preview-link", target: "_blank", rel: "noopener noreferrer nofollow", href: e.link, children: e.preview }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                s
                                                            )
                                                        ),
                                                    }),
                                                    (0, A.jsx)("figure", { className: "modal__img", children: (0, A.jsx)(r(), { src: e.image, alt: "portfolio project demo" }) }),
                                                    (0, A.jsx)("button", { className: "close-modal", onClick: () => a(!1), children: (0, A.jsx)(r(), { src: d.Z, alt: "portfolio project demo" }) }),
                                                ],
                                            },
                                            e.id
                                        )
                                    ),
                            }),
                        ],
                    });
                },
                defineLayoutOfProjectList = (e) => {
                    let { modalId: s, setGetModal: a } = e;
                    if (1 === s) return (0, A.jsx)(singleImagePopup, { modalId: s, setGetModal: a });
                    if (2 === s) return (0, A.jsx)(singleImagePopup, { modalId: s, setGetModal: a });
                    if (3 === s) return (0, A.jsx)(x, { modalId: s, setGetModal: a });
                    if (4 === s) return (0, A.jsx)(j, { modalId: s, setGetModal: a });
                    if (5 === s) return (0, A.jsx)(g, { modalId: s, setGetModal: a });
                    if (6 === s) return (0, A.jsx)(u, { modalId: s, setGetModal: a });
                    if (7 === s) return (0, A.jsx)(f, { modalId: s, setGetModal: a });
                    else if (8 === s) return (0, A.jsx)(N, { modalId: s, setGetModal: a });
                    else if (9 === s) return (0, A.jsx)(v, { modalId: s, setGetModal: a });
                },
                w = () => {
                    let [e, s] = (0, l.useState)(!1),
                        [a, c] = (0, l.useState)(1),
                        t = (e) => {
                            s(!0), c(e);
                        };
                    return (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)("div", {
                                className: "portfolio-main",
                                children: (0, A.jsxs)(i.mQ, {
                                    children: [
                                        (0, A.jsxs)(i.td, {
                                            className: "portfolio-tab-list",
                                            "data-aos": "fade-up",
                                            children: [
                                                (0, A.jsx)(i.OK, { children: "ALL" }),
                                                (0, A.jsx)(i.OK, { children: "SOCIAL MEDIA" }),
                                                (0, A.jsx)(i.OK, { children: "INSURANCE" }),
                                                (0, A.jsx)(i.OK, { children: "FURNITURE" }),
                                                (0, A.jsx)(i.OK, { children: "ECCOMERCE" }),
                                                (0, A.jsx)(i.OK, { children: "BILLING" }),
                                            ],
                                        }),
                                        (0, A.jsxs)("div", {
                                            className: "container",
                                            children: [
                                                (0, A.jsx)(i.x4, {
                                                    children: (0, A.jsx)("div", {
                                                        className: "tab-container",
                                                        children: projectList.map((e) => {
                                                            let { id: s, type: a, image: l, delayAnimation: i } = e;
                                                            return (0, A.jsx)(
                                                                "div",
                                                                {
                                                                    "data-aos": "fade-right",
                                                                    "data-aos-delay": i,
                                                                    children: (0, A.jsxs)("div", {
                                                                        className: "tab-content",
                                                                        onClick: () => t(s),
                                                                        children: [(0, A.jsx)(r(), { src: l, alt: "portfolio project demo" }), (0, A.jsx)("h3", { children: (0, A.jsx)("span", { className: "conent-title", children: a }) })],
                                                                    }),
                                                                },
                                                                s
                                                            );
                                                        }),
                                                    }),
                                                }),
                                                (0, A.jsx)(i.x4, {
                                                    children: (0, A.jsx)("div", {
                                                        className: "tab-container",
                                                        children: projectList
                                                            .filter((e) => e.tag.includes("social"))
                                                            .map((e) => {
                                                                let { id: s, type: a, image: l, delayAnimation: i } = e;
                                                                return (0, A.jsx)(
                                                                    "div",
                                                                    {
                                                                        "data-aos": "fade-right",
                                                                        "data-aos-delay": i,
                                                                        children: (0, A.jsxs)("div", {
                                                                            className: "tab-content",
                                                                            onClick: () => t(s),
                                                                            children: [
                                                                                (0, A.jsx)(r(), { src: l, alt: "portfolio project demo" }),
                                                                                (0, A.jsx)("h3", { children: (0, A.jsx)("span", { className: "conent-title", children: a }) }),
                                                                            ],
                                                                        }),
                                                                    },
                                                                    s
                                                                );
                                                            }),
                                                    }),
                                                }),
                                                (0, A.jsx)(i.x4, {
                                                    children: (0, A.jsx)("div", {
                                                        className: "tab-container",
                                                        children: projectList
                                                            .filter((e) => e.tag.includes("insurance"))
                                                            .map((e) => {
                                                                let { id: s, type: a, image: l, delayAnimation: i } = e;
                                                                return (0, A.jsx)(
                                                                    "div",
                                                                    {
                                                                        "data-aos": "fade-right",
                                                                        "data-aos-delay": i,
                                                                        children: (0, A.jsxs)("div", {
                                                                            className: "tab-content",
                                                                            onClick: () => t(s),
                                                                            children: [
                                                                                (0, A.jsx)(r(), { src: l, alt: "portfolio project demo" }),
                                                                                (0, A.jsx)("h3", { children: (0, A.jsx)("span", { className: "conent-title", children: a }) }),
                                                                            ],
                                                                        }),
                                                                    },
                                                                    s
                                                                );
                                                            }),
                                                    }),
                                                }),
                                                (0, A.jsx)(i.x4, {
                                                    children: (0, A.jsx)("div", {
                                                        className: "tab-container",
                                                        children: projectList
                                                            .filter((e) => e.tag.includes("furniture"))
                                                            .map((e) => {
                                                                let { id: s, type: a, image: l, delayAnimation: i } = e;
                                                                return (0, A.jsx)(
                                                                    "div",
                                                                    {
                                                                        "data-aos": "fade-right",
                                                                        "data-aos-delay": i,
                                                                        children: (0, A.jsxs)("div", {
                                                                            className: "tab-content",
                                                                            onClick: () => t(s),
                                                                            children: [
                                                                                (0, A.jsx)(r(), { src: l, alt: "portfolio project demo" }),
                                                                                (0, A.jsx)("h3", { children: (0, A.jsx)("span", { className: "conent-title", children: a }) }),
                                                                            ],
                                                                        }),
                                                                    },
                                                                    s
                                                                );
                                                            }),
                                                    }),
                                                }),
                                                (0, A.jsx)(i.x4, {
                                                    children: (0, A.jsx)("div", {
                                                        className: "tab-container",
                                                        children: projectList
                                                            .filter((e) => e.tag.includes("eccomerce"))
                                                            .map((e) => {
                                                                let { id: s, type: a, image: l, delayAnimation: i } = e;
                                                                return (0, A.jsx)(
                                                                    "div",
                                                                    {
                                                                        "data-aos": "fade-right",
                                                                        "data-aos-delay": i,
                                                                        children: (0, A.jsxs)("div", {
                                                                            className: "tab-content",
                                                                            onClick: () => t(s),
                                                                            children: [
                                                                                (0, A.jsx)(r(), { src: l, alt: "portfolio project demo" }),
                                                                                (0, A.jsx)("h3", { children: (0, A.jsx)("span", { className: "conent-title", children: a }) }),
                                                                            ],
                                                                        }),
                                                                    },
                                                                    s
                                                                );
                                                            }),
                                                    }),
                                                }),
                                                (0, A.jsx)(i.x4, {
                                                    children: (0, A.jsx)("div", {
                                                        className: "tab-container",
                                                        children: projectList
                                                            .filter((e) => e.tag.includes("billing"))
                                                            .map((e) => {
                                                                let { id: s, type: a, image: l, delayAnimation: i } = e;
                                                                return (0, A.jsx)(
                                                                    "div",
                                                                    {
                                                                        "data-aos": "fade-right",
                                                                        "data-aos-delay": i,
                                                                        children: (0, A.jsxs)("div", {
                                                                            className: "tab-content",
                                                                            onClick: () => t(s),
                                                                            children: [
                                                                                (0, A.jsx)(r(), { src: l, alt: "portfolio project demo" }),
                                                                                (0, A.jsx)("h3", { children: (0, A.jsx)("span", { className: "conent-title", children: a }) }),
                                                                            ],
                                                                        }),
                                                                    },
                                                                    s
                                                                );
                                                            }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            e && (0, A.jsx)(defineLayoutOfProjectList, { modalId: a, setGetModal: s }),
                            " ",
                        ],
                    });
                };
            var C = w;
        },
        1281: function (e, s, a) {
            a.d(s, {
                Z: function () {
                    return r;
                },
            });
            var A = a(5893),
                l = a(5675),
                i = a.n(l),
                c = a(7294),
                t = {
                    src: "./img/sun.png",
                    height: 24,
                    width: 24,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASklEQVR42l2NwQ2AMAzEHB4VI5SVskI3yMrtLmCJRxFyHvFJl8BBACkQmlM0LmmUBpwMlgw3IOnKLcstv8HEYFfmW9lHu1oE/7cPkP0RT+u5jqgAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8,
                },
                o = function (e) {
                    e
                        ? (localStorage.setItem("theme-color", "dark"), document.querySelector("body").classList.add("dark"), document.querySelector("body").classList.remove("light"))
                        : (localStorage.setItem("theme-color", "light"), document.querySelector("body").classList.add("light"), document.querySelector("body").classList.remove("dark"));
                };
            let n = () => {
                let [e, s] = (0, c.useState)(!1),
                    a = () => {
                        e ? (o(!0), s(!1)) : (o(!1), s(!0));
                    };
                return (0, A.jsxs)("label", {
                    className: "theme-switcher-label d-flex d-none".concat(e ? "active" : ""),
                    children: [
                        (0, A.jsx)("input", { type: "checkbox", onClick: a, className: "theme-switcher" }),
                        (0, A.jsxs)("div", {
                            className: "switch-handle",
                            children: [
                                (0, A.jsx)("span",
                                    {
                                        className: "light-text",
                                        children: (0, A.jsx)(i(), {
                                            src: './public/img/sun.png',
                                            alt: "swicher",
                                            className: "filter_1",
                                            priority: !0,
                                            id: 'sun-image',
                                            width: '30px'
                                        })
                                    }),
                                (0, A.jsx)("span", {
                                    className: "dark-text",
                                    children: (0, A.jsx)("i",
                                        {
                                            className: "fa-solid fa-moon",
                                            "aria-hidden": "true",
                                        })
                                }),
                            ],
                        }),
                    ],
                });
            };
            var r = n;
        },
        5532: function (e, s, a) {
            var A = a(5893);
            a(7294);
            var l = a(5678);
            let i = (e) => {
                let { children: s } = e;
                return (0, A.jsxs)(A.Fragment, { children: [s, (0, A.jsx)(l.Ix, {})] });
            };
            s.Z = i;
        },
    },
]);
