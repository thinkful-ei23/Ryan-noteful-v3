const folderSchema = mongoss.Schema ({
	name:{
		type: String,
		required: true,
		unique: true
	},
	timestamps:{
		createdAt:
		updatedAt: 
	}
});
