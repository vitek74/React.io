import React, { Component } from 'react';
import '../App.css';
import './Sidebar.css'

//иконки
import yandex from '../image/yandex.png'
import google from '../image/google.png'
import ok from '../image/ok.png'
import vk from '../image/vk.png'
import mail from '../image/mail.png'
import gmail from '../image/gmail.png'
import itnet from '../image/itnet.png'

const Sidebar = () => {
    return (
        <div class="sidebar">
            <h3>Sidebar#</h3>
            <div>
                <a class="hrefsidebar" href="https://yandex.ru/" target="_blank" title="Яндекс"><img src={yandex} alt="Yandex" /></a>
            </div>

            <div>
                <a class="hrefsidebar" href="https://www.google.ru/" target="_blank" title="Google"><img src={google} alt="Google" /></a>
            </div>

            <div>
                <a class="hrefsidebar" href="https://ok.ru/feed" target="_blank" title="OK"><img src={ok} alt="OK" /></a>
            </div>

            <div>
                <a class="hrefsidebar" href="https://vk.com/feed?payload=%7B%22user%22%3A%7B%22first_name%22%3A%22%22%2C%22last_name%22%3A%22%22%7D%7D" target="_blank" title="VK"><img src={vk} alt="VK" /></a>
            </div>

            <div>
                <a class="hrefsidebar" href="https://e.mail.ru/messages/inbox/?authid=kwc5pwdn.p7s&back=1%2C1&dwhsplit=s10273.b1ss12743s&from=login&x-login-auth=1&afterReload=1" target="_blank" title="mail.ru"><img src={mail} alt="mail.ru" /></a>
            </div>

            <div>
                <a class="hrefsidebar" href="https://mail.google.com/mail/u/0/#inbox" target="_blank" title="Gmail"><img src={gmail} alt="Gmail" /></a>
            </div>

            <div>
                <a class="hrefsidebar" href="https://lk.itnet33.ru/" target="_blank" title="Itnet"><img src={itnet} alt="Itnet" /></a>
            </div>



        </div>
    );
}

export default Sidebar;