import { MenuModel } from "./menu-position.model";

export const MenuPositions: MenuModel[] = [
    new MenuModel("Home", "/home"),
    new MenuModel("List", "/list"),
    new MenuModel("Add item", "/list/addItem")
]