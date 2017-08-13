using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheWorld.ViewModels;
using TheWorld.Services;
using Microsoft.Extensions.Configuration;
using TheWorld.Models;
using Microsoft.EntityFrameworkCore;

namespace TheWorld.Controllers.Web
{
    public class AppController : Controller
    {
        private IMailService _mailService;
        private IConfigurationRoot _config;
        private WorldContext _context;

        public AppController(IMailService mailService, IConfigurationRoot config, WorldContext context)
        {
            _mailService = mailService;
            _config = config;
            _context = context;
        }

        public IActionResult Index()
        {
            var data = _context.Trips.Include(x => x.Stops).ToList();
            return View(data);
        }

        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {               
                _mailService.SendMail(_config["MailSettings:ToAddress"], model.Email, "From the world", model.Message);
                ModelState.Clear();
                ViewBag.UserMessage = "Message Sent";
            }
            
            return View();
        }

        public IActionResult About()
        {
            return View();
        }
    }
}
