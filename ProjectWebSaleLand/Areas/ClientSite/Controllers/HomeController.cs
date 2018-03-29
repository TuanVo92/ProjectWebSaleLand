using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectWebSaleLand.Areas.ClientSite.Controllers
{
    public class HomeController : Controller
    {
        // GET: ClientSite/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult MoreProperties()
        {
            return View();
        }

        public ActionResult PropertiesDetail()
        {
            return View();
        }
    }
}