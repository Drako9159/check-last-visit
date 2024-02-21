const db = await Deno.openKv()



//await db.set(["visits"],new Deno.KvU64(0n))
//await db.atomic().sum(["visits"], 1n).commit()
 
//const result = await db.get<DenoKvU64>(["visits"])
//console.log(result.value)

const entries = db.list({prefix: ["preferences"]})
for await (const entry of entries) {
    console.log(entry)
}
await db.delete(["preferences", "master"])