exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 7210:
/***/ ((module) => {

// Exports
module.exports = {
	"switch": "SwitchKnob_switch__ni6Mq",
	"switch__label": "SwitchKnob_switch__label__z5KIn",
	"switch__label__text": "SwitchKnob_switch__label__text__rxKKY",
	"switch__label__ball": "SwitchKnob_switch__label__ball__hM1sv",
	"switch__input": "SwitchKnob_switch__input__z6ab_"
};


/***/ }),

/***/ 5647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./utils/languageContext.tsx
var languageContext = __webpack_require__(1553);
// EXTERNAL MODULE: ./utils/context.tsx
var context = __webpack_require__(6541);
// EXTERNAL MODULE: ./data/projects.ts + 40 modules
var projects = __webpack_require__(9147);
;// CONCATENATED MODULE: ./components/Footer.tsx





const Footer = ()=>{
    const { language , changeLanguage  } = external_react_default().useContext(languageContext/* LanguageContext */.A);
    const { project , changeProject  } = external_react_default().useContext(context/* ShowedProjectContext */.g);
    const resetProject = ()=>{
        language === "FR" ? changeProject(projects/* PROJECTS_FR.6 */.n[6]) : changeProject(projects/* PROJECTS_EN.6 */.a[6]);
    };
    let borderColor = project.dev === true ? "border-sky-600" : "border-amber-600";
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: `w-full max-h-30 md:max-h-36 flex-shrink-0 mt-auto pt-2 pb-2 border-t-2 border-dotted border-solid ${borderColor} bg-warmGray-200 self-end`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-row flex-wrap justify-between px-5 items-end text-lg font-body md:flex-nowrap",
            children: [
                project.dev === true ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-sky-600 flex order-1 flex-50 flex-col text-sm md:text-base md:order-1 md:flex-25",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: language === "EN" ? "FRONT END DEVELOPER" : "D\xc9VELOPPEUSE FRONT-END"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "MOTION / VFX "
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-amber-600 flex order-1 flex-50 flex-col text-sm md:text-base md:order-1 md:flex-25",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: language === "EN" ? "FRONT END DEVELOPER" : "D\xc9VELOPPEUSE FRONT-END"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "MOTION / VFX "
                        })
                    ]
                }),
                project.dev === true ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-sky-600 text-xs text-center order-3 pt-6 flex-100 md:order-2 md:flex-1 md:flex-50 md:text-sm md:pt-0",
                    children: language === "EN" ? "Build with Next.js, Typescript and Tailwind" : "Fabriqu\xe9 avec Next.js, Typescript et Tailwind"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-amber-600 text-xs text-center order-3 pt-6 flex-100 md:order-2 md:flex-1 md:flex-50 md:text-sm md:pt-0",
                    children: language === "EN" ? "Build with Next.js, Typescript and Tailwind" : "Fabriqu\xe9 avec Next.js, Typescript et Tailwind"
                }),
                project.dev === true ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-sky-600 flex order-2 flex-50 flex-col items-end text-sm md:text-base md:order-3 md:flex-25 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "mailto:sidonie.moulart@gmail.com",
                            children: "EMAIL"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://github.com/Fidomi",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "GITHUB"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.linkedin.com/in/sidoniemoulart/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "LINKEDIN"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "../public/documents/CV_Sidonie_Moulart_2021.pdf",
                            download: true,
                            children: language === "EN" ? "RESUME (fr)" : "CV"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-amber-600 flex order-2 flex-50 flex-col items-end text-sm md:text-base md:order-3 md:flex-25 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "mailto:sidonie.moulart@gmail.com",
                            children: "EMAIL"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://github.com/Fidomi",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "GITHUB"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.linkedin.com/in/sidoniemoulart/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "LINKEDIN"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "../public/documents/CV_Sidonie_Moulart_2021.pdf",
                            download: true,
                            children: language === "EN" ? "RESUME (fr)" : "CV"
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/SwitchKnob/SwitchKnob.module.scss
var SwitchKnob_module = __webpack_require__(7210);
var SwitchKnob_module_default = /*#__PURE__*/__webpack_require__.n(SwitchKnob_module);
;// CONCATENATED MODULE: ./components/SwitchKnob/SwitchKnob.tsx




const SwitchKnob = ({ project  })=>{
    const { language , changeLanguage  } = external_react_default().useContext(languageContext/* LanguageContext */.A);
    let isChecked = language === "FR" ? true : false;
    const handleClick = (e)=>{
        language === "FR" ? changeLanguage("EN") : changeLanguage("FR");
        const element = e.target;
    };
    const handleChange = ()=>{
        isChecked = language === "FR" ? true : false;
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(SwitchKnob_module_default())["switch"]}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "checkbox",
                id: "switch",
                className: `${(SwitchKnob_module_default()).switch__input}`,
                onClick: (e)=>handleClick(e)
                ,
                onChange: handleChange,
                checked: isChecked
            }),
            project.dev === true ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                htmlFor: "switch",
                id: `${(SwitchKnob_module_default()).label}`,
                className: `${(SwitchKnob_module_default()).switch__label} border border-solid border-sky-600`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${(SwitchKnob_module_default()).switch__label__text} font-body text-sky-600`,
                        children: "EN"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${(SwitchKnob_module_default()).switch__label__text} font-body text-sky-600`,
                        children: "FR"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${(SwitchKnob_module_default()).switch__label__ball} bg-sky-600`
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                htmlFor: "switch",
                id: `${(SwitchKnob_module_default()).label}`,
                className: `${(SwitchKnob_module_default()).switch__label} border border-solid border-amber-600 font-body`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${(SwitchKnob_module_default()).switch__label__text} font-body text-amber-600`,
                        children: "EN"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${(SwitchKnob_module_default()).switch__label__text} font-body text-amber-600`,
                        children: "FR"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${(SwitchKnob_module_default()).switch__label__ball} bg-amber-600`
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const SwitchKnob_SwitchKnob = (SwitchKnob);

;// CONCATENATED MODULE: ./components/Header.tsx







function Header() {
    const { language , changeLanguage  } = external_react_default().useContext(languageContext/* LanguageContext */.A);
    const { project , changeProject  } = external_react_default().useContext(context/* ShowedProjectContext */.g);
    const resetProject = ()=>{
        language === "FR" ? changeProject(projects/* PROJECTS_FR.6 */.n[6]) : changeProject(projects/* PROJECTS_EN.6 */.a[6]);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `mx-auto w-full py-4 bg-warmGray-200 h-auto md:max-h-24 fixed z-30 overflow-x-hidden`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "flex flex-row justify-between px-4 items-center mx-auto ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: project.dev === true ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "font-sans text-sky-600 text-2xl md:text-4xl",
                        onClick: resetProject,
                        children: "SIDONIEM"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "font-sans text-amber-600 text-2xl md:text-4xl",
                        onClick: resetProject,
                        children: "SIDONIEM"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `flex items-center justify-end`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SwitchKnob_SwitchKnob, {
                            project: project
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/about",
                            children: project.dev === true ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                onClick: resetProject,
                                className: "text-base md:text-lg w-20 text-sky-600 text-right md:w-32 font-body md:text-2xl",
                                children: language === "EN" ? "ABOUT" : "\xc0 PROPOS"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                onClick: resetProject,
                                className: "text-base md:text-lg w-20 text-amber-600 text-right md:w-32 font-body md:text-2xl",
                                children: language === "EN" ? "ABOUT" : "\xc0 PROPOS"
                            })
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout.tsx




const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `w-full bg-warmGray-200 min-h-screen h-screen h-max flex flex-col flex-nowrap justify-between items-stretch  pt-8 md:pt-20`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "w-full flex-4 flex-grow flex-shrink-0 mx-auto antialiased ",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
                    })
                ]
            })
        ]
    }));
};


/***/ })

};
;