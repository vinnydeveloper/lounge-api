const { Router } = require("express");

const controller = require("./bookings.controller");
const validation = require("./bookings.validation");
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", validation.getOne, controller.getOne);
router.get(
  "/event/:eventID",
  validation.getAllByEvent,
  controller.getAllByEvent
);
router.post("/", validation.create, controller.create);
router.delete("/:id", validation.delete, controller.delete);

module.exports = router;
