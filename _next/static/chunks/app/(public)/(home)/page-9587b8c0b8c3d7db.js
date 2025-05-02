(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [766], {
        285: (e, r, s) => {
            "use strict";
            s.d(r, {
                $: () => o
            });
            var i = s(5155);
            s(2115);
            var t = s(9708),
                a = s(2085),
                n = s(9434);
            let l = (0, a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
                variants: {
                    variant: {
                        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
                        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
                        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                        ghost: "hover:bg-accent hover:text-accent-foreground",
                        link: "text-primary underline-offset-4 hover:underline"
                    },
                    size: {
                        default: "h-9 px-4 py-2 has-[>svg]:px-3",
                        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                        icon: "size-9"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "default"
                }
            });
 
            function o(e) {
                let {
                    className: r,
                    variant: s,
                    size: a,
                    asChild: o = !1,
                    ...d
                } = e, c = o ? t.DX : "button";
                return (0, i.jsx)(c, {
                    "data-slot": "button",
                    className: (0, n.cn)(l({
                        variant: s,
                        size: a,
                        className: r
                    })),
                    ...d
                })
            }
        },
        367: (e, r, s) => {
            "use strict";
            s.d(r, {
                LoginForm: () => m
            });
            var i = s(5155),
                t = s(285),
                a = s(2523),
                n = s(3557),
                l = s(4477);
            let o = (0, l.createServerReference)("603c2ebddefeff09be4d957b2581d6f1c77f199dae", l.callServer, void 0, l.findSourceMapURL, "validateKey");
            var d = s(7650),
                c = s(2115),
                u = s(6874),
                x = s.n(u);
 
            function f() {
                let {
                    pending: e
                } = (0, d.useFormStatus)();
                return (0, i.jsx)(t.$, {
                    className: "border-border h-11 border cursor-pointer",
                    variant: "ghost",
                    type: "submit",
                    disabled: e,
                    children: e ? "Validando..." : "Entrar"
                })
            }
 
            function m() {
                let [e, r] = (0, c.useActionState)(o, null);
                return (0, i.jsxs)("div", {
                    className: "flex min-h-screen items-center justify-center p-4",
                    children: [(0, i.jsx)(n.A, {}), (0, i.jsxs)("div", {
                        className: "border-border relative w-full max-w-md rounded-2xl border p-8",
                        children: [(0, i.jsx)("div", {
                            className: "bg-background/100 absolute inset-0 rounded-2xl opacity-100"
                        }), (0, i.jsxs)("div", {
                            className: "relative flex flex-col items-center space-y-6",
                            children: [(0, i.jsx)("img", {
                                className: "h-28 w-28 rounded-full",
                                src: "/images/logo.png",
                                alt: "Logo"
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col items-center",
                                children: [(0, i.jsx)("h1", {
                                    className: "text-2xl font-semibold",
                                    children: "Bem-vindo(a)"
                                }), (0, i.jsx)("p", {
                                    className: "text-foreground/40 text-sm",
                                    children: "Digite sua key para continuar."
                                })]
                            }), (0, i.jsxs)("form", {
                                action: r,
                                className: "flex w-full flex-col space-y-4",
                                children: [(0, i.jsx)(a.p, {
                                    className: "h-12",
                                    name: "key",
                                    placeholder: "Digite sua key",
                                    required: !0
                                }), (0, i.jsx)(f, {}), e && !e.success && (0, i.jsx)("p", {
                                    className: "text-center text-sm text-red-500",
                                    children: e.message
                                }), (0, i.jsx)("div", {
                                    className: "bg-foreground/10 mx-0.5 h-[1px]"
                                }), (0, i.jsx)(x(), {
                                    className: "w-full",
                                    href: "https://www.instagram.com/sielzada/",
                                    children: (0, i.jsx)(t.$, {
                                        className: "border-border h-11 border w-full cursor-pointer",
                                        variant: "ghost",
                                        type: "button",
                                        children: "Instagram"
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        1039: (e, r, s) => {
            Promise.resolve().then(s.bind(s, 5194)), Promise.resolve().then(s.bind(s, 367))
        },
        2523: (e, r, s) => {
            "use strict";
            s.d(r, {
                p: () => a
            });
            var i = s(5155);
            s(2115);
            var t = s(9434);
 
            function a(e) {
                let {
                    className: r,
                    type: s,
                    ...a
                } = e;
                return (0, i.jsx)("input", {
                    type: s,
                    "data-slot": "input",
                    className: (0, t.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", r),
                    ...a
                })
            }
        },
        3557: (e, r, s) => {
            "use strict";
            s.d(r, {
                A: () => l
            });
            var i = s(5155),
                t = s(2115),
                a = s(131),
                n = s(9672);
 
            function l() {
                let [e, r] = (0, t.useState)(!1);
                (0, t.useEffect)(() => {
                    console.log("init"), (0, a.iC)(async e => {
                        await (0, n.G)(e)
                    }).then(() => {
                        r(!0)
                    })
                }, []);
                let s = async e => (e && console.log("Particles Loaded"), Promise.resolve());
                return (0, i.jsx)(i.Fragment, {
                    children: e && (0, i.jsx)(a.Ay, {
                        id: "tsparticles",
                        particlesLoaded: s,
                        style: {
                            zIndex: 1
                        },
                        options: {
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: !0,
                                        mode: "push"
                                    },
                                    onHover: {
                                        enable: !0,
                                        mode: "repulse"
                                    },
                                    resize: {
                                        enable: !0
                                    }
                                },
                                modes: {
                                    push: {
                                        quantity: 4
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: .4
                                    }
                                }
                            },
                            particles: {
                                color: {
                                    value: "#ffffff"
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: !0,
                                    opacity: .5,
                                    width: 1
                                },
                                move: {
                                    direction: "none",
                                    enable: !0,
                                    outModes: {
                                        default: "bounce"
                                    },
                                    random: !1,
                                    speed: 1.2,
                                    straight: !1
                                },
                                number: {
                                    density: {
                                        enable: !0
                                    },
                                    value: 160
                                },
                                opacity: {
                                    value: .5
                                },
                                shape: {
                                    type: "circle"
                                },
                                size: {
                                    value: {
                                        min: 1,
                                        max: 5
                                    }
                                }
                            },
                            detectRetina: !0
                        }
                    })
                })
            }
        },
        5194: (e, r, s) => {
            "use strict";
            s.d(r, {
                AssistantForm: () => f
            });
            var i = s(5155),
                t = s(285),
                a = s(2115),
                n = s(6434),
                l = s(5196),
                o = s(9434);
 
            function d(e) {
                let {
                    className: r,
                    ...s
                } = e;
                return (0, i.jsx)(n.bL, {
                    "data-slot": "checkbox",
                    className: (0, o.cn)("peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", r),
                    ...s,
                    children: (0, i.jsx)(n.C1, {
                        "data-slot": "checkbox-indicator",
                        className: "flex items-center justify-center text-current transition-none",
                        children: (0, i.jsx)(l.A, {
                            className: "size-3.5"
                        })
                    })
                })
            }
            var c = s(3557),
                u = s(4477);
            let x = (0, u.createServerReference)("00c8c2a40df9b07337134140fb856039bd804be5e2", u.callServer, void 0, u.findSourceMapURL, "logout");
 
            function f() {
                let [e, r] = (0, a.useState)(!1), s = async () => {
                    r(!0);
                    try {
                        (await x()).success && (window.location.href = "/")
                    } catch (e) {
                        console.error("Erro ao fazer logout:", e)
                    } finally {
                        r(!1)
                    }
                };
                return (0, i.jsxs)("div", {
                    className: "flex min-h-screen items-center justify-center p-4",
                    children: [(0, i.jsx)(c.A, {}), (0, i.jsxs)("div", {
                        className: "border-border relative w-full max-w-md rounded-2xl border p-8",
                        children: [(0, i.jsx)("div", {
                            className: "bg-background/100 opacity-1003xl absolute inset-0 rounded-2xl"
                        }), (0, i.jsxs)("div", {
                            className: "relative flex flex-col items-center space-y-6",
                            children: [(0, i.jsxs)("div", {
                                className: "flex flex-col items-center",
                                children: [(0, i.jsx)("h1", {
                                    className: "text-2xl font-semibold",
                                    children: "Aux\xedlio / @SIELZADA"
                                }), (0, i.jsx)("p", {
                                    className: "text-foreground/40 text-sm",
                                    children: "Configure o aux\xedlio para usar."
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-row items-center justify-center gap-4",
                                children: [(0, i.jsx)(t.$, {
                                    className: "border-border h-11 w-5/6 border sm:w-full cursor-pointer",
                                    variant: "ghost",
                                    children: "Aux\xedlio"
                                }), (0, i.jsx)(t.$, {
                                    className: "border-border h-11 w-5/6 border sm:w-full",
                                    variant: "ghost",
                                    children: "Info"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "flex w-full flex-col space-y-2",
                                children: [(0, i.jsxs)("div", {
                                    className: "justify-left flex flex-row items-center gap-2 sm:ml-7",
                                    children: [(0, i.jsx)(d, {}), (0, i.jsx)("span", {
                                        children: "Calibrar sensibilidade"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "justify-left flex flex-row items-center gap-2 sm:ml-7",
                                    children: [(0, i.jsx)(d, {}), (0, i.jsx)("span", {
                                        children: "Reduzir recuo"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "justify-left flex flex-row items-center gap-2 sm:ml-7",
                                    children: [(0, i.jsx)(d, {}), (0, i.jsx)("span", {
                                        children: "Aumentar precis\xe3o"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "justify-left flex flex-row items-center gap-2 sm:ml-7",
                                    children: [(0, i.jsx)(d, {}), (0, i.jsx)("span", {
                                        children: "Retirar input lag"
                                    })]
                                }), (0, i.jsx)(t.$, {
                                    className: "border-border mt-4 h-11 border cursor-pointer",
                                    variant: "ghost",
                                    children: "Injetar"
                                }), (0, i.jsx)(t.$, {
                                    className: "border-border mt-2 h-11 border cursor-pointer text-red-500 hover:text-red-700 hover:bg-red-100",
                                    variant: "ghost",
                                    onClick: s,
                                    disabled: e,
                                    children: e ? "Saindo..." : "Sair"
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        9434: (e, r, s) => {
            "use strict";
            s.d(r, {
                cn: () => a
            });
            var i = s(2596),
                t = s(9688);
 
            function a() {
                for (var e = arguments.length, r = Array(e), s = 0; s < e; s++) r[s] = arguments[s];
                return (0, t.QP)((0, i.$)(r))
            }
        }
    },
    e => {
        var r = r => e(e.s = r);
        e.O(0, [607, 41, 441, 684, 358], () => r(1039)), _N_E = e.O()
    }
]);