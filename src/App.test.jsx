import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import  userEvent  from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom"
import { expect } from "vitest"
import App from "./App.jsx"

describe('App component', () => {

    let container


    beforeEach( function ()  { 
        container = render(    
        <BrowserRouter>  
            <App />
        </BrowserRouter>
        ).container
    })


    it('should show pet adoption service heading', () => {
        expect(container.querySelector('h1')).toBeDefined()
        expect(container.querySelector('h1')).toHaveTextContent('The Pet Adoption Service')
    })

    it("shows the about us heading when about is clicked ", () => async ()  => {

    await userEvent.click(screen.getByText('About'))
    expect(container.querySelector('h1')).toBeDefined()
    expect(container.querySelector('h1')).toHaveTextContent('About Us')

    })

    it("shows the Pet cards when FindAPet is clicked ", () => async ()  => {

    await userEvent.click(screen.getByText('FindAPet'))
    expect(container.querySelector('h5')).toBeDefined()
    expect(container.querySelector('h5')).toHaveTextContent('Name: ')
    expect(container.querySelector('p')).toBeDefined()
    expect(container.querySelector('p')).toHaveTextContent('Breed: ')

    })

    
    it("shows the Pet cards when FindAPet is clicked ", () => async ()  => {

        await userEvent.click(screen.getByText(''))
        expect(container.querySelector('h2')).toBeDefined()
        expect(container.querySelector('h2')).toHaveTextContent('Frequently Asked Questions')
        expect(container.querySelector('h5')).toBeDefined()
        expect(container.querySelector('h5')).toHaveTextContent('Q: What is the adoption process?')

    
        })

})

