using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectWebSaleLand.Areas.ClientSite.Controllers
{
    public class LoginController : Controller
    {
        // GET: ClientSite/Login
        public ActionResult SignIn()
        {
            return View();
        }
    }
}