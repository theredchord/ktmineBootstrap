using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ktmineBootstrap.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "ktMINE Bootstrap";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }
    }
}
