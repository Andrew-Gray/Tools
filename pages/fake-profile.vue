<script setup>
	import { Button } from "@/components/ui/button";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
	import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
	import { Icon } from "@iconify/vue";
	import { ref, reactive } from "vue";

	const profile = reactive({ id: -1, firstName: "", lastName: "", middleInitial: "", gender: "", dateOfBirth: "", mothersMaiden: "", weight: 0, streetAddress: "", city: "", state: "", zipCode: "", countryCode: "", username: "", color: "", password: "", profileImage: "" });

	await onMounted(async () => {
		await getProfile();
		// profile.value = await $fetch("https://api.idx0.ca/tools/fakeProfile");
		// profile.value.password = passwords.createPassword();
		// profile.value.profileImage = profileImage();
	});

	const getProfile = async () => {
		profile.value = await $fetch("https://api.idx0.ca/tools/fakeProfile");
		profile.value.password = passwords.createPassword();
		profile.value.profileImage = profileImage();
	};
	const profileImage = () => {
		if (profile.value == null) return;

		const number = Math.floor(Math.random() * (32 - 1 + 1)) + 1;
		const gender = profile.value.gender.toLowerCase();

		return `/profile/${gender}${number}.jpg`;
	};
	const gender = () => {
		if (profile.value == null) return;
		return profile.value.gender == "M" ? "Male" : "Female";
	};
	const formatDate = (date) => {
		const monthNamesLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

		const current = new Date(date);
		const monthNum = current.getMonth();
		const dateNum = current.getDate();
		const year = current.getFullYear();

		return `${monthNamesLong[monthNum]} ${dateNum}, ${year}`;
	};
	const country = () => {
		if (profile.value == null) return;
		return profile.value.countryCode == "US" ? "United States" : "Canada";
	};

	const copy = (value) => {
		let text = "";

		switch (true) {
			case value === "Name":
				text = `${profile.value.firstName} ${profile.value.middleInitial} ${profile.value.lastName}`;
				break;
			case value === "Gender":
				text = gender();
				break;
			case value === "Birthday":
				text = formatDate(profile.value.dateOfBirth);
				break;
			case value === "Location":
				text = `${profile.value.streetAddress}, ${profile.value.city} ${profile.value.state}, ${country()}, ${profile.value.zipCode}`;
				break;
			case value === "Username":
				text = profile.value.username;
				break;
			case value === "Password":
				text = profile.value.password;
				break;
			default:
				break;
		}

		if (text === "") {
			return;
		}

		fns.copyToClipboard(text, `${value} copied to clipboard`);
	};
</script>

<template>
	<Card
		v-if="profile?.value != null"
		class="w-full max-w-3xl">
		<CardHeader>
			<CardTitle>Fake Profile</CardTitle>
			<CardDescription>All of the information below is randomly generated. Images are AI generated and the text is from fakenamegenerator.com</CardDescription>
		</CardHeader>
		<CardContent class="flex flex-col gap-4">
			<div class="flex flex-col items-center gap-4">
				<img
					:src="profile.value.profileImage"
					alt="Profile Picture"
					class="h-48 w-48 rounded-full object-cover" />

				<div
					class="text-2xl"
					@click="copy('Name')">
					{{ profile.value.firstName }} {{ profile.value.middleInitial }} {{ profile.value.lastName }}
				</div>
			</div>

			<Table>
				<TableBody>
					<TableRow @click="copy('Gender')">
						<TableCell class="flex flex-row items-center gap-3 text-lg">
							<Icon
								v-if="profile.value.gender == 'F'"
								icon="material-symbols:female" />
							<Icon
								v-if="profile.value.gender == 'M'"
								icon="material-symbols:male" />
							Gender:
						</TableCell>
						<TableCell class="text-lg">{{ gender() }}</TableCell>
					</TableRow>
					<TableRow @click="copy('Birthday')">
						<TableCell class="flex flex-row items-center gap-3 text-lg"><Icon icon="material-symbols:cake-rounded" />Birthday:</TableCell>
						<TableCell class="text-lg">{{ formatDate(profile.value.dateOfBirth) }}</TableCell>
					</TableRow>
					<TableRow @click="copy('Location')">
						<TableCell class="flex flex-row items-center gap-3 text-lg"><Icon icon="material-symbols:location-on-rounded" />Location:</TableCell>
						<TableCell class="text-lg">{{ profile.value.streetAddress }}, {{ profile.value.city }} {{ profile.value.state }}, {{ country() }}, {{ profile.value.zipCode }}</TableCell>
					</TableRow>
					<TableRow @click="copy('Username')">
						<TableCell class="flex flex-row items-center gap-3 text-lg"><Icon icon="material-symbols:account-box" />Username:</TableCell>
						<TableCell class="text-lg">{{ profile.value.username }}</TableCell>
					</TableRow>
					<TableRow @click="copy('Password')">
						<TableCell class="flex flex-row items-center gap-3 text-lg"><Icon icon="material-symbols:password" />Password:</TableCell>
						<TableCell class="text-lg">{{ profile.value.password }}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</CardContent>
		<CardFooter class="flex w-full justify-end gap-4">
			<Button @click="getProfile()">New Profile</Button>
		</CardFooter>
	</Card>
</template>

<style lang="scss" scoped></style>
