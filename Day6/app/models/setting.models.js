module.exports = (sequelize, Datatype) =>{
    const Setting = sequelize.define("Setting",{
        id:{
            type: Datatype.INTEGER,
            autoIncrment: true,
            allowNull: false,
            primerykey: true
        },
        theme:{
            Type: Datatype.STRING,
            allowNull: false
        }
    });
    return Setting;
};