export async function fetchContent() {
  // if (!process.env.NEXT_CMS_URL) throw 'NEXT_CMS_URL env is undefined'

  /*
    TODO: handle cms request and response with error handling
    const res = fetch(process.env.NEXT_CMS_URL)
    */

  const res = undefined
  return res ? res : exampleResponse()
}

async function exampleResponse() {
  console.log(
    'Please replace this example response with a CMS call and error handling'
  )
  return { header: 'Hello World!', paragraph: 'Add your content here' }
}
