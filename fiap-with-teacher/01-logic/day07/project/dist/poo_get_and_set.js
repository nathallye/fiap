"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// objeto com herança
const Employee_get_and_set_1 = __importDefault(require("./Employee_get_and_set"));
const employee = new Employee_get_and_set_1.default("Nathallye", 23, "123456", "039.000.111-22");
employee.regisEmployee();
