class Credential {
  // eslint-disable-next-line max-len
  static props = ['id', 'name', 'description', 'credentialType', 'credentialOwner', 'displayName', 'instanceType', 'uri']

  constructor(credential) {
    Object.keys(credential).forEach(key => {
      Object.assign(this, { [key]: credential[key] })
    })
  }
}

export default Credential
