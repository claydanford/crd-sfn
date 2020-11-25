export const handler = async (event: any) => {
  let email: string

  if (event.fraudlant) {
    email = badEmail()
  } else {
    email = goodEmail()
  }

  return { email }
}

const goodEmail = () => 'Good email sent...'

const badEmail = () => 'Bad email sent...'
