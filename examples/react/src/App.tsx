import { useSettings } from '@uxshop/storefront-react/lib/hooks/use-settings'
import { useSections } from '@uxshop/storefront-react/lib/hooks/use-sections'
import { useUser } from '@uxshop/storefront-react/lib/hooks/use-user'
import { Sections } from '@uxshop/storefront-react/lib/components/sections'
import { UxVideo } from '@uxshop/storefront-react'
import { useEffect } from 'react'
import Html from './components/html'

const components = {
    html: Html
}

const get = async (id: string) => {
    console.log(`result ${id}`, '')
}

function Header() {
    useEffect(() => {
        const get = async (id: string) => {
            console.log('')
        }
        get('header')
    }, [])
    return <h1>Hello </h1>
}

function App() {
    const setting = useSettings()
    const sections = useSections()
    const user = useUser({ email: 'diovani@dooca.com.br', password: 'Teste123' })

    const data = {
        title: 'teste',
        description: 'teste',
        url: 'https://youtu.be/YD5hBvZ9fFo'
    }

    return (
        <div className="App">
            <h1>Teste {user && user.data.email}</h1>
            <UxVideo settings={data} />
            <Sections components={components} />
        </div>
    )
}

export default App
