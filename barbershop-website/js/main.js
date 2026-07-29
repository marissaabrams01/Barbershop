// =======================
// File: js/main.js
// Vintage Barbershop Project 
// ===========================

// ---- DOM Elements ----
const yearE1 = document.getElementById("year");

const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const featureGrid = document.getElementById("featureGrid");
const hoursList = document.getElementById("hoursList");

const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");

const phoneLink = document.getElementById("phoneLink");
const addressLink = document.getElementById("addressLink");
const emailLink = document.getElementById("emailLink");

const heading = document.getElementById("heroHeading");
const heroSubtext = document.getElementById("heroSubtext");

// ----- Modal Elements -----
const serviceModal = document.getElementById("serviceModal");
// const? (), serviceModal?(), =(), document (), .(), getElementById(), (), ""(),
const serviceModalOverlay = document.getElementById("serviceModalOverlay");

const serviceModalClose = document.getElementById("ServiceModalClose");

const serviceModalTitle = document.getElementById("serviceModalTitle");

const serviceModalPrice = document.getElementById("serviceModalPrice");
const serviceModalList = document.getElementById("serviceModalList");


// ----- Main Shop Object -----
const shopInfo = {
    name: "Vintage Barbershop",
    address: "123 Main St, Your City",
    phoneDisplay: "(555) 123-4567",
    phoneRaw: "5551234567",
    email: "hello@vintagebarbershop.com"
};


// ----- Navigation Data -----
const navlinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#features" },
    { label: "Book", href: "#cta" },
    { label: "Contact", href: "#footer" }
];

//----- Services Data -----
const services = [
    {
        id: 1,
        title: "Classic Haircut",
        image: "assets/images/features-1.jpg",
        alt: "Classic haircut", 
        description: "Timeless cuts with modern precision-tailored to your style.",
        price: 25,
        popular: true,
        details: [
            "Consultation with your barber before the cut begins.",
            "Hair sectioning and shape-up based on your preferred style.",
            "Professional clippers, trimmers, and shears used for precision.",
            "Neckline cleanup and finishing touches included.",
            "Light styling product applied for a clean final look."
        ]
    },
    {
        id: 2,
        title: "Beard Trim",
        image: "assets/images/feature-4.jpeg",
        alt: "Beard trim",
        description: "Shape, line-up, and refine your beard for a clean finish.",
        price: 15,
        popular: false,
        details: [
            "Beard assessment and shaping based on face structure.",
            "Line-up around cheeks, jawline, and neckline.",
            "Trimmers and detail tools used for crisp edges.",
            "Conditioning beard product may be applied for softness.",
            "Final symmetry check for a polished finish."
        ]
    },
    {
        id: 3,
        title: "Straight Razor Shave",
        image: "assets/images/features-3.jpg",
        alt: "Straight Razor Shave",
        description: "Hot towel, smooth shave, and classic barbershop expirence.",
        price: 30,
        popular: true,
        details: [
            "Hot towel prep to soften facial hair and open pores.",
            "Premium shaving cream or lather applied to protect the skin.",
            "Straight razor shave performed with careful detailing.",
            "Second hot towel may be used for comfort and cleanup.",
            "Aftershave or soothing skin product applied after service."
        ]
    },
    {
        id: 4,
        title: "Fade & Style",
        image: "assets/images/feature-2.jpg",
        alt: "Fade Haircut",
        description: "A clean fade with finishing detail for a sharp, modern look.",
        price: 35,
        popular: false,
        details: [
            "Style consultation before clipper work begins.",
            "Fade blended to your preferred level and finish.",
            "Detailing around temples, neckline, and beard area if needed.",
            "Scissors and clipper-over-comb may be used for texture.",
            "Styling product added to complete the final look."
        ]
    },
    {
        id: 5,
        title: "Kids Cut",
        image: "assets/images/features-1.jpg",
        alt: "Kids haircut",
        description: "Clean, comfortable haircut service for younger clients.",
        price: 20,
        popular: false,
        details: 
        [
            "Simple consultation with child and parent if needed.",
            "Age-appropriate haircut with comfort in mind.",
            "Careful clipper and scissor work for a clean finish.",
            "Light cleanup around the neckline and ears.",
            "Styled neatly before leaving the chair."
        ]
    },
    {
        id: 6,
        title: "Head Shave",
        image: "assets/images/feature-3.jpg",
        alt: " Head Shave",
        description: "Smooth head shave with classic barbershop treatment.",
        price: 28,
        popular: true,
        details: [
            "Scalp prep with warm towel treatment.",
            "Protective shave product applied before razor work.",
            "Close shave performed for a smooth finish.",
            "Scalp cleaned and checked for even consistency.",
            "Moisturizing scalp product applied after the shave."
        ]
    }   
];

//----- Hours Data -----
const buisnessHours = [
    {day: "Monday", open: 9, close: 19 },
    {day: "Tuesday", open: 9, close: 19 },
    {day: "Wednesday", open: 9, close: 19 },
    {day: "Thursday", open: 9, close: 19 },
    {day: "Friday", open: 10, close: 17 },
    {day: "Saturday", open: 0, clsoe: 0 }
];

//----- Helpers -----
const setCurrentYear = () => {
    if(!yearE1) return;

    yearE1.textContent = new Date().getFullYear();
};

const formatHour = (hour) => {
    if (hour === 0) return "Closed";
    if (hour === 12) return "12pm";
    if (hour > 12) return '${hour - 12}pm';
    return '${hour}am';
};

let isMenuOpen = false;

const toggleMobileMenu = () => {
    if (!mobileMenu) return;

    if (!isMenuOpen) {
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }
};

// Close mobile menu when a link is clicked or when clicking outside the menu
const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
};

// Resusable functions to update text content in the hero section
const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};

const updateSubtext = (newText) => {
    if (!heroSubtext) return;
    heroSubtext.textContent = newText;
};

// ----- Modal Logic ----- 
const openServiceModal = (serviceId) => {
    if (!serviceModal || !serviceModalTitle || !serviceModalPrice || !serviceModalList) return;

    const selectService = services.find((service) => service.id === Number(serviceId));
    if (!selectedService) return;

    serviceModalTitle.textContent = selectedService.title;
    serviceModalPrice.textContent = '$${selectedService.price}';
    serviceModalList.innerHTML = selectedService.details
    .map((detail) => '<li>${detail}</li>')
    .join("");

    serviceModal.classList.add("is-open");
    serviceModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
};

const closeServiceModal = () => {
    if (!serviceModal) return;
}