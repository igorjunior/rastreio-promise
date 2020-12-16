const rastreio = require('./service/correios');

module.exports = async (codigo) =>  {
  if (codigo.length !== 13) {
    return {error: "validation_error", message: "O código de rastreio deve conter 13 caracteres."};
  }
  try{
    const result = await rastreio(codigo);
    return result;
  }catch{
    return {error: "service_error", message: "O serviço não retornou eventos para este código de rastreio."};
  }
};
