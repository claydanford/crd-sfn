import 'source-map-support/register'
import cryptoRandomString from 'crypto-random-string'

export const handler = async (event: any) => {
  const cc = event['Credit Card']

  const response = {
    id: cryptoRandomString({ length: 20 }),
    statusCode: 200,
    fraudulant: false,
    ...event,
  }

  if (cc.includes('99')) response.fraudulant = true

  return response
}
