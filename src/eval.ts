import 'source-map-support/register'

export const handler = async (event: any) => {
  const cc = event['Credit Card']

  const response = {
    statusCode: 200,
    fraudulant: false,
    ...event,
  }

  if (cc.includes('99')) response.fraudulant = true

  return response
}
