import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("@pages/HomePage.vue")
		},
		{
			path: "/uuid",
			name: "Uuid Generator",
			component: () => import("@pages/UuidGeneratorPage.vue")
		},
		{
			path: "/textTransform",
			name: "Text Transform",
			component: () => import("@pages/TextTransformPage.vue")
		},
		{
			path: "/urlEncodeDecode",
			name: "Url Encode/Decode",
			component: () => import("@pages/UrlEncodeDecodePage.vue")
		},
		// {
		// 	path: "/locationInfo",
		// 	name: "Location Info",
		// 	component: () => import("@pages/LocationInfoPage.vue")
		// },
		{
			path: "/passwordGenerator",
			name: "Password Generator",
			component: () => import("@pages/PasswordGeneratorPage.vue")
		},
		{
			path: "/qrCodeGenerator",
			name: "QR Code Generator",
			component: () => import("@pages/QrCodeGeneratorPage.vue")
		},
		{
			path: "/loremIpsumGenerator",
			name: "Lorem Ipsum Generator",
			component: () => import("@pages/LoremIpsumGeneratorPage.vue")
		},
		{
			path: "/hmacGenerator",
			name: "HMAC Generator",
			component: () => import("@pages/HmacGeneratorPage.vue")
		}
		// {
		// 	path: "/colorConverter",
		// 	name: "Color Converter",
		// 	component: () => import("@pages/ColorConverterPage.vue")
		// },
		// {
		//   path: "/systemInfo",
		//   name: "System Info",
		//   component: () => import("@pages/SystemInfo.vue")
		// }
	]
});

export default router;
