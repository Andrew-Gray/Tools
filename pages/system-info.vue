<script setup>
	import { UAParser } from "ua-parser-js";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
	import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
	import { ref } from "vue";

	const userAgent = navigator.userAgent;
	const uaData = UAParser(userAgent);
	const browserName = uaData.browser.name;
	const browserVersion = uaData.browser.version;
	const osName = uaData.os.name;
	const doNotTrack = navigator.doNotTrack == "1" ? "Enabled" : "Disabled";

	const screenWidth = ref(window.screen.width);
	const screenHeight = ref(window.screen.height);
	const screenColorDepth = ref(window.screen.colorDepth);
	const browserWidth = ref(window.outerWidth);
	const browserHeight = ref(window.outerHeight);
	const windowWidth = ref(window.innerWidth);
	const windowHeight = ref(window.innerHeight);

	const ipv4 = await $fetch("https://api.ipify.org/");
	const ipLocation = await $fetch(`http://ip-api.com/json/${ipv4}?fields=254681`);

	window.addEventListener("resize", () => {
		screenWidth.value = window.screen.width;
		screenHeight.value = window.screen.height;
		browserWidth.value = window.outerWidth;
		browserHeight.value = window.outerHeight;
		windowWidth.value = window.innerWidth;
		windowHeight.value = window.innerHeight;
	});
</script>

<template>
	<Card class="w-full max-w-3xl">
		<CardHeader>
			<CardTitle>System Info</CardTitle>
			<CardDescription>This page shows information about your system and browser.</CardDescription>
		</CardHeader>
		<CardContent class="flex flex-col gap-4">
			<Table>
				<TableBody>
					<TableRow>
						<TableCell>User Agent</TableCell>
						<TableCell>{{ userAgent }}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Browser</TableCell>
						<TableCell>{{ browserName }} {{ browserVersion }}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Do Not Track</TableCell>
						<TableCell>{{ doNotTrack }}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Operating System</TableCell>
						<TableCell>{{ osName }}</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Screen Size</TableCell>
						<TableCell>{{ screenWidth }} x {{ screenHeight }} pixels</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Screen Color Depth</TableCell>
						<TableCell>{{ screenColorDepth }} bits</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Browser Window Size</TableCell>
						<TableCell>{{ browserWidth }} x {{ browserHeight }} pixels</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Browser Viewport Size</TableCell>
						<TableCell>{{ windowWidth }} x {{ windowHeight }} pixels</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>IP Address</TableCell>
						<TableCell>{{ ipv4 }}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>IP Location Info</TableCell>
						<TableCell>
							<div>City: {{ ipLocation.city }}</div>
							<div>Region: {{ ipLocation.regionName }}</div>
							<div>Country: {{ ipLocation.country }}</div>
							<div>Latitude: {{ ipLocation.lat }}</div>
							<div>Longitude: {{ ipLocation.lon }}</div>
							<div>Internet Service Provider: {{ ipLocation.isp }}</div>
							<div>Mobile (cellular): {{ ipLocation.mobile }}</div>
							<div>Proxy, VPN or Tor exit address: {{ ipLocation.proxy }}</div>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</CardContent>
		<!-- <CardFooter class="flex w-full justify-end gap-4">
			<Button
				variant="outline"
				@click="clearUuids">
				Clear
			</Button>
			<Button @click="copyUuids">Copy</Button>
		</CardFooter> -->
	</Card>
</template>

<style lang="scss" scoped></style>
