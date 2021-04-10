// 'https://login.live.com/oauth20_authorize.srf?client_id={client_id}&scope=files.readwrite.all offline_access&response_type=token&redirect_uri=http://localhost/onedrive/'

const url = window.location.href.split('#')[1]
const url_params = new URLSearchParams(url)
const token = url_params.get('access_token')
console.log(token)

if (!token) {
    window.location.replace('/onedrive/login')
}


const btnOk = document.querySelector('#ok')
const file = document.querySelector('#file')
const fileName = document.querySelector('#fileName')

const fetchData = async (url, method, headers, body) => {
    try {
        let response = await fetch(url, {
            method: method,
            headers: headers,
            body: body
        })
        switch(response.status) {
            case 401:
                window.location.replace('/onedrive/login')
                break;
        }
        return response.json()
    }catch(err) {
        console.error(err)
        return err
    }
}

btnOk.addEventListener('click', async e => {
    console.log(file.files[0])
    if(fileName.value.trim().length == 0 || file.value == '' ) {
        fileName.value = ''
        file.value = ''
        alert('Oye, por favor llena tus inputs')
        return
    }
    let ext = file.files[0].name.substring(file.files[0].name.lastIndexOf('.') + 1)
    const apiURL = `https://graph.microsoft.com/v1.0/me/drive/root:/{folder}/${fileName.value}.${ext}:/createUploadSession`
    let uploadSession = await fetchData(apiURL, 'POST', 
        new Headers({
            'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json'
        }), JSON.stringify({
            "item": {
                "@microsoft.graph.conflictBehavior": "rename"
            }
        }))
    console.log(uploadSession)
    
    let response = await fetchData(uploadSession.uploadUrl, 'PUT', new Headers({
        'Authorization': `bearer ${token}`,
        'Content-type': file.files[0].type,
        'Content-length': file.files[0].size 
    }), file.files[0])

    console.log(response)
    fileName.value = ''
    file.value = ''
})