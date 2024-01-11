import {model} from './model'
import './styles/main.css'
import {Site} from './classes/site'
import {SideBar} from './classes/SideBar'

const site = new Site('#site') // dom model

site.render(model) // html -> dom-tree

const updateCallBack = newBlock => {
    model.push(newBlock)
    site.render(model)
}

const Sidebar = new SideBar('#panel', updateCallBack)
