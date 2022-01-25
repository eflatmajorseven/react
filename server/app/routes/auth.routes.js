const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.post(
    "/api/auth/slot", 
    controller.slotadmin
  );
    app.post(
    "/api/auth/saveslot", 
    controller.saveSlot
  );
 app.get(
   "/api/auth/slots",
   controller.getAllSlots
 );

app.get(
  "/api/auth/users",
  //[authJwt.verifyToken, authJwt.isAdmin],
  controller.getAllUsers
);
app.delete(
  "/api/auth/users/:id",
  controller.removeUser
)
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/slotadmin",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.slotadmin);
};
