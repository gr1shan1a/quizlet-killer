import {Site} from "./site";
import {SideBar} from "./SideBar";

export class App {
    constructor(model) {
        this.model = model
    }

    init() {
        const site = new Site('#site') // dom model

        site.render(this.model) // html -> dom-tree

        const updateCallBack = newBlock => {
            this.model.push(newBlock)
            site.render(this.model)
        }

        const Sidebar = new SideBar('#panel', updateCallBack)

    }
}