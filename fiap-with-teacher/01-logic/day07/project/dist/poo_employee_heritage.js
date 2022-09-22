"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// objeto com herança
const Employee_heritage_1 = __importDefault(require("./Employee_heritage"));
const employee = new Employee_heritage_1.default("Nathallye", 23, "123456", "039.000.111-22");
employee.regisEmployee();
