function parseUplink(device, payload)
{
    var parsed = payload.asParsedObject();
    env.log(parsed);

    var temperatureSensor = device.endpoints.byType(endpointType.temperatureSensor);
    if (temperatureSensor != null){
        temperatureSensor.updateTemperatureSensorStatus(parsed.field1);
    }

}
