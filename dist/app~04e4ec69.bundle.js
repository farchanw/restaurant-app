"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[209],{756:(n,A,t)=>{t.d(A,{Z:()=>o});var e=t(537),r=t.n(e),i=t(645),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap);"]),a.push([n.id,"* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: 'Inter', sans-serif;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nheader {\n\tcolor: #fff;\n}\n\nheader nav {\n\tbackground: rgba(0, 0, 0, .2);\n}\n\nh1, h2 {\n\tmargin: 0;\n\tpadding: 0;\n}\n\narticle h1 {\n\tfont-size: 1.25rem;\n}\n\nbutton {\n  min-width: 44px;\n  min-height: 44px;\n}\n\na {\n\tcolor: #ff5500;\n\ttext-decoration: none;\n}\n\np {\n\tline-height: 1.5;\n}\n\nimg {\n\tmax-width: 100%;\n}\n\nform label {\n  display: block;\n  padding: 1rem 0 0.5rem;\n}\n\nform input,\nselect {\n  width: 100%;\n  min-height: 44px;\n}\n\nfooter {\n\tpadding: 2rem;\n\tbackground: #000;\n\tcolor: #eee;\n\ttext-align: center;\n}\n\n\n.hidden {\n\tdisplay: none;\n}\n\n#drawer {\n\tposition: relative;\n  z-index: 2;\n\tdisplay: grid;\n\tcolumn-gap: 1rem;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgrid-template-columns: auto auto;\n\tpadding: 0 1rem;\n\tbackground-color: #ff5500;\n}\n\n#drawer a {\n\tcolor: #fff;\n\ttext-decoration: none;\n}\n\n#drawer a:hover {\n\ttext-decoration: underline;\n}\n\n#drawer .navbar-menu {\n\tdisplay: grid;\n  grid-template-columns: repeat(3, auto);\n  gap: .5rem;\n\tjustify-content: end;\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n  z-index: 1;\n}\n\n#drawer .navbar-menu.open {\n\tleft: 0;\n}\n\n#drawer .navbar-branding-button {\n\tdisplay: none;\n}\n\n#drawer .navbar-menu li {\n\tcolor: #fff;\n}\n\n#drawer .navbar-menu li a {\n  display: inline-block;\n  width: 100%;\n  padding: 0.875rem;\n\ttext-decoration: none;\n}\n\n#drawer .navbar-menu li a:hover {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n#drawer .hamburger {\n\tcursor: pointer;\n\tbackground: transparent;\n\tborder: 0;\n  color: #fff;\n}\n\n#drawer .navbar-home {\n  display: inline;\n  width: fit-content!important;\n  padding: 0.875rem 0!important;\n  font-size: 1rem;\n}\n\n\n@media (min-width:576px) {\n\t#drawer button {\n\t\tdisplay: none;\n\t}\n\n}\n\n#drawer button span {\n\tcolor: #fff;\n}\n\n.skip-link {\n  position: absolute;\n  top: -6rem;\n  left:50%;\n  transform: translateX(-50%);\n  background-color: #ff5500;\n  color: white;\n  padding: 8px;\n  z-index: 3;\n  transition: .3s;\n}\n \n.skip-link:focus {\n  top: .5rem;\n}\n\n\n#hero {\n  position: relative;\n}\n\n#hero img {\n  width:100%;\n  height: 80vh;\n}\n\n#hero h1 {\n  font-size: 2rem;\n}\n\n.img-bg {\n  filter: brightness(.5);\n  width: 100%;\n  object-fit: cover;\n}\n\n.box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color:#fff;\n  text-align: center;\n}\n\n#list {\n  margin: 4rem auto;\n  text-align: center;\n}\n\n#list-box {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n  padding: 1rem;\n  text-align: left;\n}\n\n.heading {\n  font-size: 2rem;\n}\n\n.card {\n  position: relative;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tborder-radius: .25rem;\n}\n\n.card img {\n  width: 100%;\n  height: 12rem;\n  object-fit: cover;\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.card .content {\n  color: #000;\n  padding: 0.5rem 1rem;\n}\n\n.card .content p {\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;  \n  overflow: hidden;\n}\n\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n\n.badge {\n  position: absolute;\n    top: 0.5rem;\n    background: #ff5500;\n    padding: 0.25rem 0.5rem;\n    color: #fff;\n    border-radius: 0.5rem;\n    font-size: .85rem;\n}\n\n.rating {\n  margin: 0.5rem 0;\n}\n\n.star {\n\tcolor: gold;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ff5500;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n.restaurant-title {\n  margin: 1rem 0;\n}\n\n.restaurant-info h3 {\n  margin-bottom: .5rem;\n}\n\n.restaurant-infobox {\n  display: grid;\n  grid-template-columns: 5rem auto;\n  gap: 0.5rem;\n  line-height: 1.5;\n}\n\n.restaurant-infobox h4 {\n  margin:0\n}\n\n.review-item {\n  margin:1rem 0;\n  line-height: 1.5;\n}\n\n.review-item .name {\n  font-weight: 500;\n  word-wrap: break-word;\n}\n\n.review-item .date {\n  color:#777;\n  font-size: .875rem;\n}\n\n.review-item .review-content {\n  word-wrap: break-word;\n}\n\n#review-submit input,\n#review-submit textarea {\n  padding: .5rem;\n  border: 1px solid #888;\n}\n\n#review-submit input:focus,\n#review-submit textarea:focus {\n  outline: none;\n  border: 1px solid #ff5500;\n}\n\n#review-submit textarea {\n  width: 100%;\n  min-height: 4rem;\n  resize: vertical;\n  margin: 1rem 0;\n}\n\n#review-submit button {\n  margin: 0!important;\n}\n\n#booking {\n  position: relative;\n  text-align: center;\n  background: #000;\n  color: #fff;\n}\n\n#booking form {\n  max-width: 36rem;\n  margin:0 auto;\n  padding: 1rem;\n}\n\n#booking label {\n  text-align: left;\n}\n\n#review-submit input,\n#review-submit textarea,\n#review-submit button,\n#booking input,\n#booking select,\n#booking button {\n  border-radius: .25rem;\n}\n\n#review-submit button,\n#booking button {\n  width: 100%;\n  border: none;\n  background:#ff5500;\n  color: #fff;\n  text-transform: uppercase;\n  margin: 1rem 0;\n}\n\n#booking img {\n  width: 100%;\n  height: 48rem;\n}\n\n#booking .box {\n  width: 100%;\n}\n\n@media screen and (min-width:1024px) {\n  #list-box {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n\n@media screen and (max-width:1024px) {\n  #list-box {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media screen and (max-width:576px) {\n  #list-box {\n    grid-template-columns: 1fr;\n  }\n\n\t#drawer .navbar-menu {\n\t\ttransition: .3s;\n\t\tposition: absolute;\n\t\tgrid-template-columns: 1fr;\n    grid-template-rows: repeat(4, 4rem);\n    align-items: center;\n    gap: 0;\n\t\tleft: -100%;\n\t\ttop: 0;\n\t\tbackground-color: #191922;\n\t\twidth: 66.7%;\n\t\theight: 100vh;\n\t\tbox-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);\n\t}\n\n\t#drawer .navbar-menu li {\n\t\tdisplay: block;\n\t}\n\n  #drawer .navbar-menu li a {\n    padding: 1.5rem 1rem;\n  }\n\n\t#drawer .navbar-menu.open {\n\t\theight: 100vh;\n\t\tflex-wrap: nowrap;\n\t\tjustify-content: left;\n\t\toverflow-y: auto;\n    position: fixed;\n\t}\n\n\t.navbar-branding {\n\t\tvertical-align: middle;\n\t}\n\n\t#drawer .navbar-branding-button {\n\t\tdisplay: block;\n\t\tpadding: .5rem;\n    margin: 0!important;\n    height: auto;\n\t\tborder-bottom: 1px solid #454545;\n\t}\n  \n}\n.alert {\n  margin: 1rem 0;\n  background: #df1818;\n  color: #fff;\n  padding: 1rem;\n  border-radius: 0.5rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.spinner {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  border: 0.25em solid #ff5500;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: .75s linear infinite spinner;\n  animation: .75s linear infinite spinner;\n  margin: 2rem;\n}\n\n@keyframes spinner {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: 'Inter', sans-serif;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nheader {\n\tcolor: #fff;\n}\n\nheader nav {\n\tbackground: rgba(0, 0, 0, .2);\n}\n\nh1, h2 {\n\tmargin: 0;\n\tpadding: 0;\n}\n\narticle h1 {\n\tfont-size: 1.25rem;\n}\n\nbutton {\n  min-width: 44px;\n  min-height: 44px;\n}\n\na {\n\tcolor: #ff5500;\n\ttext-decoration: none;\n}\n\np {\n\tline-height: 1.5;\n}\n\nimg {\n\tmax-width: 100%;\n}\n\nform label {\n  display: block;\n  padding: 1rem 0 0.5rem;\n}\n\nform input,\nselect {\n  width: 100%;\n  min-height: 44px;\n}\n\nfooter {\n\tpadding: 2rem;\n\tbackground: #000;\n\tcolor: #eee;\n\ttext-align: center;\n}\n\n\n.hidden {\n\tdisplay: none;\n}\n\n#drawer {\n\tposition: relative;\n  z-index: 2;\n\tdisplay: grid;\n\tcolumn-gap: 1rem;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgrid-template-columns: auto auto;\n\tpadding: 0 1rem;\n\tbackground-color: #ff5500;\n}\n\n#drawer a {\n\tcolor: #fff;\n\ttext-decoration: none;\n}\n\n#drawer a:hover {\n\ttext-decoration: underline;\n}\n\n#drawer .navbar-menu {\n\tdisplay: grid;\n  grid-template-columns: repeat(3, auto);\n  gap: .5rem;\n\tjustify-content: end;\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n  z-index: 1;\n}\n\n#drawer .navbar-menu.open {\n\tleft: 0;\n}\n\n#drawer .navbar-branding-button {\n\tdisplay: none;\n}\n\n#drawer .navbar-menu li {\n\tcolor: #fff;\n}\n\n#drawer .navbar-menu li a {\n  display: inline-block;\n  width: 100%;\n  padding: 0.875rem;\n\ttext-decoration: none;\n}\n\n#drawer .navbar-menu li a:hover {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n#drawer .hamburger {\n\tcursor: pointer;\n\tbackground: transparent;\n\tborder: 0;\n  color: #fff;\n}\n\n#drawer .navbar-home {\n  display: inline;\n  width: fit-content!important;\n  padding: 0.875rem 0!important;\n  font-size: 1rem;\n}\n\n\n@media (min-width:576px) {\n\t#drawer button {\n\t\tdisplay: none;\n\t}\n\n}\n\n#drawer button span {\n\tcolor: #fff;\n}\n\n.skip-link {\n  position: absolute;\n  top: -6rem;\n  left:50%;\n  transform: translateX(-50%);\n  background-color: #ff5500;\n  color: white;\n  padding: 8px;\n  z-index: 3;\n  transition: .3s;\n}\n \n.skip-link:focus {\n  top: .5rem;\n}\n\n\n#hero {\n  position: relative;\n}\n\n#hero img {\n  width:100%;\n  height: 80vh;\n}\n\n#hero h1 {\n  font-size: 2rem;\n}\n\n.img-bg {\n  filter: brightness(.5);\n  width: 100%;\n  object-fit: cover;\n}\n\n.box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color:#fff;\n  text-align: center;\n}\n\n#list {\n  margin: 4rem auto;\n  text-align: center;\n}\n\n#list-box {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n  padding: 1rem;\n  text-align: left;\n}\n\n.heading {\n  font-size: 2rem;\n}\n\n.card {\n  position: relative;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tborder-radius: .25rem;\n}\n\n.card img {\n  width: 100%;\n  height: 12rem;\n  object-fit: cover;\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.card .content {\n  color: #000;\n  padding: 0.5rem 1rem;\n}\n\n.card .content p {\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;  \n  overflow: hidden;\n}\n\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n\n.badge {\n  position: absolute;\n    top: 0.5rem;\n    background: #ff5500;\n    padding: 0.25rem 0.5rem;\n    color: #fff;\n    border-radius: 0.5rem;\n    font-size: .85rem;\n}\n\n.rating {\n  margin: 0.5rem 0;\n}\n\n.star {\n\tcolor: gold;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ff5500;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n.restaurant-title {\n  margin: 1rem 0;\n}\n\n.restaurant-info h3 {\n  margin-bottom: .5rem;\n}\n\n.restaurant-infobox {\n  display: grid;\n  grid-template-columns: 5rem auto;\n  gap: 0.5rem;\n  line-height: 1.5;\n}\n\n.restaurant-infobox h4 {\n  margin:0\n}\n\n.review-item {\n  margin:1rem 0;\n  line-height: 1.5;\n}\n\n.review-item .name {\n  font-weight: 500;\n  word-wrap: break-word;\n}\n\n.review-item .date {\n  color:#777;\n  font-size: .875rem;\n}\n\n.review-item .review-content {\n  word-wrap: break-word;\n}\n\n#review-submit input,\n#review-submit textarea {\n  padding: .5rem;\n  border: 1px solid #888;\n}\n\n#review-submit input:focus,\n#review-submit textarea:focus {\n  outline: none;\n  border: 1px solid #ff5500;\n}\n\n#review-submit textarea {\n  width: 100%;\n  min-height: 4rem;\n  resize: vertical;\n  margin: 1rem 0;\n}\n\n#review-submit button {\n  margin: 0!important;\n}\n\n#booking {\n  position: relative;\n  text-align: center;\n  background: #000;\n  color: #fff;\n}\n\n#booking form {\n  max-width: 36rem;\n  margin:0 auto;\n  padding: 1rem;\n}\n\n#booking label {\n  text-align: left;\n}\n\n#review-submit input,\n#review-submit textarea,\n#review-submit button,\n#booking input,\n#booking select,\n#booking button {\n  border-radius: .25rem;\n}\n\n#review-submit button,\n#booking button {\n  width: 100%;\n  border: none;\n  background:#ff5500;\n  color: #fff;\n  text-transform: uppercase;\n  margin: 1rem 0;\n}\n\n#booking img {\n  width: 100%;\n  height: 48rem;\n}\n\n#booking .box {\n  width: 100%;\n}\n\n@media screen and (min-width:1024px) {\n  #list-box {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n\n@media screen and (max-width:1024px) {\n  #list-box {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media screen and (max-width:576px) {\n  #list-box {\n    grid-template-columns: 1fr;\n  }\n\n\t#drawer .navbar-menu {\n\t\ttransition: .3s;\n\t\tposition: absolute;\n\t\tgrid-template-columns: 1fr;\n    grid-template-rows: repeat(4, 4rem);\n    align-items: center;\n    gap: 0;\n\t\tleft: -100%;\n\t\ttop: 0;\n\t\tbackground-color: #191922;\n\t\twidth: 66.7%;\n\t\theight: 100vh;\n\t\tbox-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);\n\t}\n\n\t#drawer .navbar-menu li {\n\t\tdisplay: block;\n\t}\n\n  #drawer .navbar-menu li a {\n    padding: 1.5rem 1rem;\n  }\n\n\t#drawer .navbar-menu.open {\n\t\theight: 100vh;\n\t\tflex-wrap: nowrap;\n\t\tjustify-content: left;\n\t\toverflow-y: auto;\n    position: fixed;\n\t}\n\n\t.navbar-branding {\n\t\tvertical-align: middle;\n\t}\n\n\t#drawer .navbar-branding-button {\n\t\tdisplay: block;\n\t\tpadding: .5rem;\n    margin: 0!important;\n    height: auto;\n\t\tborder-bottom: 1px solid #454545;\n\t}\n  \n}\n.alert {\n  margin: 1rem 0;\n  background: #df1818;\n  color: #fff;\n  padding: 1rem;\n  border-radius: 0.5rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.spinner {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  border: 0.25em solid #ff5500;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: .75s linear infinite spinner;\n  animation: .75s linear infinite spinner;\n  margin: 2rem;\n}\n\n@keyframes spinner {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}"],sourceRoot:""}]);const o=a},46:(n,A,t)=>{var e=t(379),r=t.n(e),i=t(795),a=t.n(i),o=t(569),C=t.n(o),d=t(565),m=t.n(d),l=t(216),s=t.n(l),E=t(589),g=t.n(E),B=t(756),p={};p.styleTagTransform=g(),p.setAttributes=m(),p.insert=C().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=s();r()(B.Z,p),B.Z&&B.Z.locals&&B.Z.locals}}]);
//# sourceMappingURL=app~04e4ec69.bundle.js.map