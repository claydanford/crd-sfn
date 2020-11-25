import * as AWS from 'aws-sdk'
import cryptoRandomString from 'crypto-random-string'

const region = process.env.AWS_REGION
const TableName = process.env.TABLE_NAME

AWS.config.update({ region })
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })

export const handler = async (event: any) => {
  const id = cryptoRandomString({ length: 20, type: 'numeric' })

  const params = {
    TableName,
    Item: {
      ID: { S: id },
      NAME: { S: event.Name },
      ITEM: { S: event.Item },
      EMAIL: { S: event.Email },
    },
  }

  console.log(params)

  try {
    await ddb.putItem(params).promise()
  } catch (err) {
    console.log(err)
  }

  return event
}
