const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'e3b8d4f0-98ea-4565-ac36-140d776f9707'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
