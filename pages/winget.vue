<script setup>
	import { Label } from "@/components/ui/label";
	import { Checkbox } from "@/components/ui/checkbox";
	import { Button } from "@/components/ui/button";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
	import { Icon } from "@iconify/vue";
	import { ref, reactive } from "vue";

	const colCount = ref(2);
	const download = ref(null);

	const options = reactive([
		{
			section: "Browsers",
			title: "Browsers",
			apps: [
				{ id: "Mozilla.Firefox", name: "Firefox", source: "winget", url: "https://www.mozilla.org/firefox", selected: false },
				{ id: "Mozilla.Firefox.DeveloperEdition", name: "Firefox Developer Edition", source: "winget", url: "https://www.mozilla.org/firefox/developer", selected: false },
				{ id: "LibreWolf.LibreWolf", name: "LibreWolf", source: "winget", url: "https://librewolf.net", selected: false },
				{ id: "Google.Chrome", name: "Google Chrome", source: "winget", url: "https://www.google.com/chrome", selected: false },
				{ id: "TheBrowserCompany.Arc", name: "Arc", source: "winget", url: "https://arc.net", selected: false },
				{ id: "Brave.Brave", name: "Brave", source: "winget", url: "https://brave.com", selected: false },
				{ id: "Vivaldi.Vivaldi", name: "Vivaldi", source: "winget", url: "https://vivaldi.com", selected: false },
				{ id: "DuckDuckGo.DesktopBrowser", name: "DuckDuckGo", source: "winget", url: "https://duckduckgo.com", selected: false }
			]
		},
		{
			section: "GamingLaunchers",
			title: "Gaming Launchers",
			apps: [
				{ id: "Valve.Steam", name: "Steam", source: "winget", url: "https://store.steampowered.com", selected: false },
				{ id: "Valve.SteamLink", name: "Steam Link", source: "winget", url: "https://store.steampowered.com/remoteplay", selected: false },
				{ id: "ElectronicArts.EADesktop", name: "EA App", source: "winget", url: "https://www.ea.com/ea-app", selected: false },
				{ id: "EpicGames.EpicGamesLauncher", name: "Epic Games", source: "winget", url: "https://store.epicgames.com", selected: false },
				{ id: "Amazon.Games", name: "Amazon Games", source: "winget", url: "https://www.amazongames.com/support/prime-gaming/articles/download-and-install-the-amazon-games-app", selected: false }
			]
		},
		{
			section: "Communication",
			title: "Communication",
			apps: [
				{ id: "Discord.Discord", name: "Discord", source: "winget", url: "https://discord.com", selected: false },
				{ id: "Zoom.Zoom", name: "Zoom", source: "winget", url: "https://zoom.us", selected: false },
				{ id: "Microsoft.Teams", name: "Teams", source: "winget", url: "https://www.microsoft.com/microsoft-teams", selected: false },
				{ id: "Microsoft.Skype", name: "Skype", source: "winget", url: "https://www.skype.com", selected: false },
				{ id: "Mozilla.Thunderbird", name: "Thunderbird", source: "winget", url: "https://www.thunderbird.net", selected: false },
				{ id: "Proton.ProtonMail", name: "Proton Mail", source: "winget", url: "https://proton.me/mail", selected: false }
			]
		},
		{
			section: "DeveloperTools",
			title: "Developer Tools",
			apps: [
				{ id: "Microsoft.VisualStudioCode", name: "Visual Studio Code", source: "winget", url: "https://code.visualstudio.com", selected: false },
				{ id: "VSCodium.VSCodium", name: "VS Codium", source: "winget", url: "https://vscodium.com", selected: false },
				{ id: "Microsoft.VisualStudio.2022.Community", name: "Visual Studio 2022 Community", source: "winget", url: "https://visualstudio.microsoft.com", selected: false },
				{ id: "Microsoft.VisualStudio.2022.Professional", name: "Visual Studio 2022 Professional", source: "winget", url: "https://visualstudio.microsoft.com", selected: false },
				{ id: "Microsoft.VisualStudio.2022.Enterprise", name: "Visual Studio 2022 Enterprise", source: "winget", url: "https://visualstudio.microsoft.com", selected: false },
				{ id: "Git.Git", name: "Git", source: "winget", url: "https://git-scm.com", selected: false },
				{ id: "Fork.Fork", name: "Fork", source: "winget", url: "https://git-fork.com", selected: false },
				{ id: "GitHub.GitHubDesktop", name: "GitHub Desktop", source: "winget", url: "https://desktop.github.com", selected: false },
				{ id: "OpenJS.NodeJS", name: "Node JS", source: "winget", url: "https://nodejs.org", selected: false },
				{ id: "Microsoft.AzureDataStudio", name: "Azure Data Studio", source: "winget", url: "https://azure.microsoft.com/products/data-studio", selected: false },
				{ id: "Microsoft.SQLServerManagementStudio", name: "Microsoft SQL Server Management Studio", source: "winget", url: "https://learn.microsoft.com/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16", selected: false },
				{ id: "Microsoft.SQLServer.2022.Express", name: "Microsoft SQL Server 2022 Express", source: "winget", url: "https://www.microsoft.com/en-ca/sql-server/sql-server-2022", selected: false },
				{ id: "Microsoft.SQLServer.2022.Developer", name: "Microsoft SQL Server 2022 Developer", source: "winget", url: "https://www.microsoft.com/en-ca/sql-server/sql-server-2022", selected: false }
			]
		},
		{
			section: "LanguagesRuntimes",
			title: "Languages & Runtimes",
			apps: [
				{ id: "Python.Python.3.12", name: "Python 3.12", source: "winget", url: "https://www.python.org", selected: false },
				{ id: "Python.Python.3.11", name: "Python 3.11", source: "winget", url: "https://www.python.org", selected: false },
				{ id: "Python.Python.3.10", name: "Python 3.10", source: "winget", url: "https://www.python.org", selected: false },
				{ id: "Python.Python.3.9", name: "Python 3.9", source: "winget", url: "https://www.python.org", selected: false },
				{ id: "Microsoft.DotNet.Runtime.8", name: "DotNet Runtime 8", source: "winget", url: "https://dotnet.microsoft.com/download/dotnet/8.0", selected: false },
				{ id: "Microsoft.DotNet.Runtime.7", name: "DotNet Runtime 7", source: "winget", url: "https://dotnet.microsoft.com/download/dotnet/7.0", selected: false },
				{ id: "Microsoft.DotNet.Runtime.6", name: "DotNet Runtime 6", source: "winget", url: "https://dotnet.microsoft.com/download/dotnet/6.0", selected: false },
				{ id: "Microsoft.DotNet.SDK.8", name: "DotNet SDK 8", source: "winget", url: "https://dotnet.microsoft.com/download/dotnet/8.0", selected: false },
				{ id: "Microsoft.DotNet.SDK.7", name: "DotNet SDK 7", source: "winget", url: "https://dotnet.microsoft.com/download/dotnet/7.0", selected: false },
				{ id: "Microsoft.DotNet.SDK.6", name: "DotNet SDK 6", source: "winget", url: "https://dotnet.microsoft.com/download/dotnet/6.0", selected: false },
				{ id: "Oracle.JavaRuntimeEnvironment", name: "Oracle Java Runtime Environment", source: "winget", url: "https://www.oracle.com/java", selected: false },
				{ id: "Oracle.JDK.22", name: "Oracle JDK 22", source: "winget", url: "https://www.oracle.com/java/technologies/downloads/#java22", selected: false },
				{ id: "Oracle.JDK.21", name: "Oracle JDK 21", source: "winget", url: "https://www.oracle.com/java/technologies/downloads/#java21", selected: false },
				{ id: "Oracle.JDK.20", name: "Oracle.JDK.17", source: "winget", url: "https://www.oracle.com/java/technologies/downloads/#java17", selected: false },
				{ id: "GoLang.Go", name: "Go", source: "winget", url: "https://go.dev", selected: false }
			]
		},
		{
			section: "Utils",
			title: "Utilities",
			apps: [
				{ id: "7zip.7zip", name: "7zip", source: "winget", url: "https://www.7-zip.org", selected: false },
				{ id: "M2Team.NanaZip", name: "NanaZip", source: "winget", url: "https://github.com/M2Team/NanaZip", selected: false },
				{ id: "AutoHotkey.AutoHotkey", name: "AutoHotkey", source: "winget", url: "https://www.autohotkey.com", selected: false },
				{ id: "LocalSend.LocalSend", name: "LocalSend", source: "winget", url: "https://localsend.org", selected: false },
				{ id: "Microsoft.PowerToys", name: "Microsoft PowerToys", source: "winget", url: "https://learn.microsoft.com/windows/powertoys", selected: false },
				{ id: "Rainmeter.Rainmeter", name: "Rainmeter", source: "winget", url: "https://www.rainmeter.net", selected: false },
				{ id: "RevoUninstaller.RevoUninstaller", name: "Revo Uninstaller", source: "winget", url: "https://www.revouninstaller.com", selected: false },
				{ id: "ShareX.ShareX", name: "ShareX", source: "winget", url: "https://getsharex.com", selected: false },
				{ id: "Logitech.UnifyingSoftware", name: "Logitech Unifying Software", source: "winget", url: "https://support.logi.com/hc/articles/360025297913-Unifying-Software", selected: false },
				{ id: "Nvidia.Broadcast", name: "Nvidia Broadcast", source: "winget", url: "https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-app", selected: false },
				{ id: "Oracle.VirtualBox", name: "Oracle VirtualBox", source: "winget", url: "https://www.virtualbox.org", selected: false },
				{ id: "Chocolatey.Chocolatey", name: "Chocolatey", source: "winget", url: "https://chocolatey.org", selected: false }
			]
		},
		{
			section: "Image",
			title: "Image",
			apps: [
				{ id: "GIMP.GIMP", name: "GIMP", source: "winget", url: "https://www.gimp.org", selected: false },
				{ id: "Inkscape.Inkscape", name: "Inkscape", source: "winget", url: "https://inkscape.org", selected: false },
				{ id: "BlenderFoundation.Blender", name: "Blender", source: "winget", url: "https://www.blender.org", selected: false },
				{ id: "KDE.Krita", name: "Krita", source: "winget", url: "https://krita.org", selected: false },
				{ id: "dotPDN.PaintDotNet", name: "Paint.Net", source: "winget", url: "https://www.getpaint.net", selected: false }
			]
		},
		{
			section: "Video",
			title: "Video",
			apps: [
				{ id: "VideoLAN.VLC", name: "VLC", source: "winget", url: "https://www.videolan.org", selected: false },
				{ id: "CodecGuide.K-LiteCodecPack.Full", name: "K-Lite Codec Pack (Full)", source: "winget", url: "https://codecguide.com/download_kl.htm", selected: false },
				{ id: "CodecGuide.K-LiteCodecPack.Mega", name: "K-Lite Codec Pack (Mega)", source: "winget", url: "https://codecguide.com/download_kl.htm", selected: false },
				{ id: "CodecGuide.K-LiteCodecPack.Standard", name: "K-Lite Codec Pack (Standard)", source: "winget", url: "https://codecguide.com/download_kl.htm", selected: false },
				{ id: "CodecGuide.K-LiteCodecPack.Basic", name: "K-Lite Codec Pack (Basic)", source: "winget", url: "https://codecguide.com/download_kl.htm", selected: false },
				{ id: "HandBrake.HandBrake", name: "HandBrake", source: "winget", url: "https://handbrake.fr", selected: false },
				{ id: "GuinpinSoft.MakeMKV", name: "MakeMKV", source: "winget", url: "https://www.makemkv.com", selected: false }
			]
		},
		{
			section: "Audio",
			title: "Audio",
			apps: [
				{ id: "Apple.iTunes", name: "iTunes", source: "winget", url: "https://www.apple.com/itunes", selected: false },
				{ id: "Audacity.Audacity", name: "Audacity", source: "winget", url: "https://www.audacityteam.org", selected: false }
			]
		},
		{
			section: "Hardware",
			title: "Hardware",
			apps: [
				{ id: "CPUID.CPU-Z", name: "CPU-Z", source: "winget", url: "https://www.cpuid.com/softwares/cpu-z.html", selected: false },
				{ id: "CPUID.HWMonitor", name: "HWMonitor", source: "winget", url: "https://www.cpuid.com/softwares/hwmonitor.html", selected: false },
				{ id: "Logitech.GHUB", name: "Logitech G HUB", source: "winget", url: "https://www.logitechg.com/innovation/g-hub.html", selected: false },
				{ id: "SteelSeries.GG", name: "SteelSeries GG", source: "winget", url: "https://steelseries.com/gg", selected: false },
				{ id: "Nvidia.GeForceExperience", name: "Nvidia GeForce Experience", source: "winget", url: "https://www.nvidia.com/en-us/geforce/geforce-experience", selected: false }
			]
		},
		{
			section: "StorageBackups",
			title: "Storage & Backups",
			apps: [
				{ id: "Google.GoogleDrive", name: "Google Drive", source: "winget", url: "https://www.google.com/drive/download", selected: false },
				{ id: "Microsoft.OneDrive", name: "Microsoft OneDrive", source: "winget", url: "https://www.microsoft.com/microsoft-365/onedrive/online-cloud-storage", selected: false },
				{ id: "Dropbox.Dropbox", name: "Dropbox", source: "winget", url: "https://www.dropbox.com", selected: false },
				{ id: "Proton.ProtonDrive", name: "Proton Drive", source: "winget", url: "https://proton.me/drive", selected: false },
				{ id: "Syncthing.Syncthing", name: "Syncthing", source: "winget", url: "https://syncthing.net", selected: false },
				{ id: "SyncTrayzor.SyncTrayzor", name: "SyncTrayzor", source: "winget", url: "https://github.com/canton7/SyncTrayzor", selected: false },
				{ id: "Rclone.Rclone", name: "Rclone", source: "winget", url: "https://rclone.org", selected: false }
			]
		},
		{
			section: "Security",
			title: "Security",
			apps: [
				{ id: "Bitwarden.Bitwarden", name: "Bitwarden", source: "winget", url: "https://bitwarden.com", selected: false },
				{ id: "AgileBits.1Password", name: "1Password", source: "winget", url: "https://1password.com", selected: false },
				{ id: "Proton.ProtonPass", name: "Proton Pass", source: "winget", url: "https://proton.me/pass", selected: false },
				{ id: "PrivateInternetAccess.PrivateInternetAccess", name: "Private Internet Access", source: "winget", url: "https://www.privateinternetaccess.com", selected: false },
				{ id: "NordSecurity.NordVPN", name: "NordVPN", source: "winget", url: "https://nordvpn.com", selected: false },
				{ id: "Proton.ProtonVPN", name: "Proton VPN", source: "winget", url: "https://protonvpn.com", selected: false },
				{ id: "Malwarebytes.Malwarebytes", name: "Malwarebytes", source: "winget", url: "https://www.malwarebytes.com", selected: false }
			]
		}
	]);

	const generate = () => {
		const fileName = "winget-install.bat";
		const fileContent = getTextContent();
		const fileBlob = new Blob([fileContent], { type: "text/plain" });
		window.URL = window.URL || window.webkitURL;

		download.value.setAttribute("href", window.URL.createObjectURL(fileBlob));
		download.value.setAttribute("download", fileName);
		download.value.click();
	};
	const getTextContent = () => {
		//winget install --id {ID} --exact --source {SOURCE} --silent --accept-package-agreements --accept-source-agreements --disable-interactivity
		let text = "@echo off\n";

		options.forEach((section) => {
			section.apps.forEach((app) => {
				if (app.selected) {
					text += `echo Installing ${app.name}\n`;
					text += `winget install --id ${app.id} --exact --source ${app.source} --silent --accept-package-agreements --accept-source-agreements --disable-interactivity\n`;
				}
			});
		});

		return text;
	};
	const clear = () => {
		options.forEach((section) => {
			section.apps.forEach((app) => {
				app.selected = false;
			});
		});
	};
	const getColCount = () => {
		const size = window.outerWidth;

		switch (true) {
			case size > 768:
				colCount.value = 2;
				break;
			default:
				colCount.value = 1;
				break;
		}
	};

	const colClass = computed(() => {
		switch (colCount.value) {
			case 2:
				return "grid-cols-2";
			default:
				return "grid-cols-1";
		}
	});
	const col1Items = computed(() => {
		return options.filter((_, i) => i % colCount.value === 0);
	});
	const col2Items = computed(() => {
		return options.filter((_, i) => i % colCount.value === 1);
	});

	onMounted(() => {
		getColCount();
		window.addEventListener("resize", getColCount);
	});
</script>

<template>
	<Card class="w-full max-w-3xl">
		<CardHeader>
			<CardTitle>Winget Installer Generator</CardTitle>
			<CardDescription>Create a winget install script based on selected apps.</CardDescription>
		</CardHeader>
		<CardContent
			class="grid gap-8"
			:class="colClass">
			<div>
				<div
					v-for="option in col1Items"
					:key="option.section"
					class="mb-4 flex flex-col gap-2">
					<label class="mb-1 text-xl">{{ option.title }}</label>
					<div
						v-for="app in option.apps"
						:key="app.id"
						class="flex items-center gap-2">
						<Checkbox
							:id="app.id"
							:checked="app.selected"
							@update:checked="app.selected = !app.selected" />
						<label
							:for="app.id"
							class="flex flex-row items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
							{{ app.name }}
							<a
								v-if="app.url != ''"
								:href="app.url"
								target="_blank"
								:title="`Go to ${app.name} site`">
								<Icon icon="material-symbols:open-in-new" />
							</a>
						</label>
					</div>
				</div>
			</div>
			<div v-if="colCount >= 2">
				<div
					v-for="option in col2Items"
					:key="option.section"
					class="mb-4 flex flex-col gap-2">
					<label class="mb-1 text-xl">{{ option.title }}</label>
					<div
						v-for="app in option.apps"
						:key="app.id"
						class="flex items-center gap-2">
						<Checkbox
							:id="app.id"
							:checked="app.selected"
							@update:checked="app.selected = !app.selected" />
						<label
							:for="app.id"
							class="flex flex-row items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
							{{ app.name }}
							<a
								v-if="app.url != ''"
								:href="app.url"
								target="_blank"
								:title="`Go to ${app.name} site`">
								<Icon icon="material-symbols:open-in-new" />
							</a>
						</label>
					</div>
				</div>
			</div>
		</CardContent>
		<CardFooter class="flex w-full justify-end gap-4">
			<Button
				variant="outline"
				@click="clear">
				Clear Selected
			</Button>
			<Button @click="generate">Generate</Button>
			<a
				href="#"
				ref="download"
				class="hidden"
				>Download File</a
			>
		</CardFooter>
	</Card>
</template>

<style lang="scss" scoped></style>
