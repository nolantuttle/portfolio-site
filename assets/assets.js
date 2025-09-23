import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo_light from './logo_light.svg';
import logo_dark from './logo_dark.svg';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import supabase from './supabase.png';
import platform_icon from './platforms_icon.svg';
import eclipse_icon from './eclipse.png';
import raspberrypi_icon from './raspberrypi.png';
import gcc_icon from './gcc.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo_light,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    supabase,
    platform_icon,
    eclipse_icon,
    raspberrypi_icon,
    gcc_icon
};

export const projectData = [
    {
        title: 'GaggiaBerry',
        description: 'PID control system for Gaggia Classic Pro espresso machine.',
        bgImage: '/coffee.png',
    },
    {
        title: 'PhytoPi',
        description: 'IoT-based controlled environment for plant growth. (Currently in progress).',
        bgImage: '/phytopi.png',
    },
    {
        title: 'seaShell',
        description: 'A custom Unix/Linux command line interpreter with batch file or interactive input',
        bgImage: '/cli.png',
    }
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Technical Skills', description: 'Embedded C, C++, Python, MIPS/ARM64 Assembly'},
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B. of Science in Software Engineering Grand Canyon University - Expected Graduation May 2026' },
    { icon: assets.platform_icon, iconDark: assets.project_icon_dark, title: 'Platforms/Protocols', description: 'ARM Cortex-M, ESP32, Raspberry Pi, I2C, SPI, UART' }
];

export const toolsData = [
    assets.vscode, assets.eclipse_icon, assets.raspberrypi_icon, assets.gcc_icon, assets.git
];