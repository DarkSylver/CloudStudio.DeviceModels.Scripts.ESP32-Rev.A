function getConfiguration(config)
{
  config.addressLabel = {en: "DEVEUI", es: "DEVEUI"};
}

function getEndpoints(deviceAddress, endpoints)
{
  endpoints.addEndpoint("1", "Temperature sensor", endpointType.temperatureSensor);
}