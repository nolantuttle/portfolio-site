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
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
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
import hero_circle from './hero_circle.jpg';
import about_photo from './about_photo.jpg';
import logo from './logo.svg';
import tools_icon from './tools_icon.svg';

export const assets = {
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
    mail_icon,
    mail_icon_dark,
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
    gcc_icon,
    hero_circle,
    about_photo,
    logo,
    tools_icon
};

export type Project = {
    title: string
    description: string
    bgImage: string[]
    github?: string
    link?: string
    paper?: string
    summary: string
    tech_stack: string
    status: string
}

export const projectData: Project[] = [
    {
        title: 'ResistorClassification',
        description: 'A machine learning pipeline that classifies resistor images by ohm value and wattage using computer vision and SVM.',
        bgImage: ['/ResistorClassification1.png'],
        github: 'https://github.com/nolantuttle/ResistorClassification',
        summary: 'ResistorClassification is an end-to-end ML pipeline that identifies resistor values from raw images. Images are preprocessed using OpenCV — converted to HSV color space and analyzed via hue, saturation, and brightness histograms combined with color moments to extract a rich feature vector per image. A multi-output linear SVM then classifies both resistance (37 classes) and wattage (5 classes) simultaneously, achieving 67% and 80% accuracy respectively across ~2,800 images. The model is deployed as a Flask web application allowing users to upload a resistor image and receive a prediction in real time',
        tech_stack: 'Python, scikit-learn, OpenCV, Flask, NumPy, SciPy',
        status: 'In Development'
    },
    {
        title: 'PhytoPi',
        description: 'IoT-based controlled environment for plant growth. (Currently in development).',
        bgImage: ['/PhytoPi.png', '/PhytoPi2.png', '/PhytoPi3.png'],
        summary: 'PhytoPi combines a Raspberry Pi-based sensor controller with a modern Flutter dashboard to create a complete plant monitoring ecosystem. The system tracks temperature, humidity, soil moisture, and water levels, while providing real-time data visualization, automated alerts, and AI-powered insights through a responsive web and mobile interface.',
        tech_stack: 'Flutter, Dart, C, Python, SQLite, Supabase',
        status: 'Complete - Presentation at the GCU Capstone Showcase April 8th, 2026'
    },
    {
        title: 'A.I.M',
        description: 'Autonomous Image-based Machine — vision-only autonomous robot navigating without GPS or LiDAR, using stereo depth and visual odometry',
        bgImage: ['/AIM.png'],
        link: 'https://aigcu.github.io/AIM-Website/',
        paper: '/AIM_Localization_Paper.pdf',
        summary: 'The A.I.M. (Autonomous Image-based Machine) project is a fully autonomous robot that navigates using only stereo camera input — no GPS, LiDAR, or external sensors. I was responsible for the stereo vision pipeline: performing a 150-frame stereo calibration to achieve near-coplanar alignment, tuning SGBM disparity parameters (32 disparities, block size 7, 320×240) for a reliable depth range of 0.23–5m, and optimizing the perception pipeline from a 30 Hz target to a sustained 40–60 Hz. The system uses a hybrid localization strategy combining continuous stereo visual odometry with landmark-based drift correction for real-time waypoint navigation on embedded hardware.',
        tech_stack: 'Python, OpenCV, SGBM Stereo Matching, Raspberry Pi 5, MobileNetV2',
        status: 'Won 2nd Place at 2026 GCU Honors Symposium (STEM Category)'
    },
    {
        title: 'DE10 Audio Memory Game',
        description: 'Simon-style audio output memory game implemented on DE10-Standard FPGA using VHDL.',
        bgImage: ['/de10-standard.png'],
        github: 'https://github.com/nolantuttle/DE10AudioGame',
        summary: 'This project is an audio-based memory game running on Intel’s SoC FPGA platform. Running on the DE10 Standard embedded board, it maps the four buttons to four unique audio samples and generates a sequence of these audio samples to play from the WM8731 audio codec through the line out port on the board. The goal of the player is to press the buttons which are mapped to the four audio samples to generate the same sequence of audio samples outputted by the board, with each round the sequence will increment by 1, increasing difficulty of the game. By utilizing both the Hard Processing System (HPS) and FPGA fabric, the application delivers a responsive interaction that combines audio, button input, and hex display feedback.',
        tech_stack: 'VHDL, C',
        status: 'Complete'
    },
    {
        title: 'ESPresso',
        description: 'ESP32C3 SuperMini-based PID controller for Gaggia Classic Pro espresso machines.',
        bgImage: ['/ESPresso.jpg'],
        github: 'https://github.com/nolantuttle/ESPresso',
        summary: 'ESPresso is a custom embedded controller for the Gaggia Classic Pro espresso machine, built on an ESP32-C3 SuperMini. It implements closed-loop boiler temperature control via SSR and a tuned PID (Kp=38, Ki=4, Kd=250), accurate within ±1°F. A MOC3021 optoisolator and BTA41-600B TRIAC handle AC pump phase control via PWM, with a zero-crossing MOC3041 and snubber circuit pending for cleaner switching. The brew switch is wired as a GPIO sense input, triggering a live shot timer on the SSD1306 OLED alongside temp, setpoint, and PID state. An XDB401 pressure transducer is wired in for future closed-loop pressure profiling. All controls — mode toggle, brew/steam switching, and ±1°F temp adjustment via resistor ladder — are hardware-based with no app required.',
        tech_stack: 'C++, ESP32',
        status: 'In Development'
    }

]


export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B. of Science in Software Engineering Grand Canyon University - April 2026' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Embedded C, C++, Python, VHDL, Java' },
    { icon: assets.platform_icon, iconDark: assets.project_icon_dark, title: 'Platforms', description: 'ARM Cortex-M, ESP32, Raspberry Pi, RP2040' },
    { icon: assets.tools_icon, iconDark: assets.tools_icon, title: 'Concepts', description: 'Linux, REST APIs, CI / CD, Agile / SDLC, Server Deployment, Cloudflare, Computer Vision' }


];

export const toolsData = [
    assets.vscode, assets.eclipse_icon, assets.raspberrypi_icon, assets.gcc_icon, assets.git
];