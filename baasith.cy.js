



/// <reference types="cypress" />

beforeEach(() => {
    cy.visit("https://baasithfazil.github.io/resume/")
    cy.viewport(1200, 660)
})


describe("Navigation Bar (Side)", ()=> {

    //use this only for small viewports
    // it("Resume Name", ()=> {
    //     cy.get('*[data-testid^="toggle"]').click()   
    // })
    it('Avatar Image', () => {
        cy.get('.avatarimage').should('be.visible')
        .should('have.class', "avatarimage")
        .and('have.css', 'border-radius', '50%')
    });
    it("User name", ()=> {
        cy.get('*[data-testid^="resume-name"]')
        .should('contain', "Baasith Fazil")
        .and('have.css', 'font-size', '24px')
        //this background color. not the font color
        .and('have.css', 'color', 'rgb(255, 255, 255)')
    })

    // only use when viewport is below 700px
    // it("Burger Icon", ()=> {
    //     cy.get('*[data-testid^="toggle"]').click()
    // })

//social media links
    it('Length of the element', () => {
        cy.get('.profile > .social-links')
        .find('a')
        .should('have.length', 5)
        
    });
    it("Twitter Icon - Container", ()=> {
        cy.get('.nav-twitter').click().should('be.visible')
    })

    it("Twitter Icon", ()=> {
        cy.get('.nav-twitter > .bx').click().should('be.visible')
    })

    it("Facebook Icon - Container", ()=> {
        cy.get('.nav-facebook').click();
    })

    it("Facebook Icon", ()=> {
        cy.get('.nav-facebook > .bx').click();
    })
    
    it("Github Icon - Container", ()=> {
        cy.get('.nav-github').click();
    })

    it("Github Icon", ()=> {
        cy.get('.nav-github > .bx').click();
    })
    
    it("LinkedIn Icon - Container", ()=> {
        cy.get('.nav-github').click();
    })

    it("LinkedIn Icon", ()=> {
        cy.get('.nav-linkedin > .bx').click();
    })

    it("Medium Icon - Container", ()=> {
        cy.get('.nav-medium').click();
    })

    it("Medium Icon", ()=> {
        cy.get('.nav-medium > .bi').click();
    })
    


    //navigation options
    it('Navigation option length', () => {
        cy.get('#navbar').find('a').should('have.length', 3)
    });

    //home navigation bar
    it('Home Navbar', () => {
        cy.get(':nth-child(1) > .nav-link').should('be.visible')
    });

    it('Home Navbar - Icon', () => {
        cy.get(':nth-child(1) > .nav-link > .bx').should('be.visible')
    });

    it('Home Navbar - Text', () => {
        cy.get(':nth-child(1) > .nav-link > span').should('be.visible').contains('Home')
    });

    //about navigation bar
    it('About Navbar', () => {
        cy.get(':nth-child(2) > .nav-link').should('be.visible')
    });

    it('About Navbar - Icon', () => {
        cy.get(':nth-child(2) > .nav-link > .bx').should('be.visible')
    });

    it('About Navbar - Text', () => {
        cy.get(':nth-child(2) > .nav-link > span').should('be.visible').contains('About')
    });



    //resume Navigation Bar
    it('Resume Navbar', () => {
        cy.get(':nth-child(3) > .nav-link').should('be.visible')
    });

    it('Resume Navbar - Icon', () => {
        cy.get(':nth-child(3) > .nav-link > .bx').should('be.visible')
    });

    it('Resume Navbar - Text', () => {
        cy.get(':nth-child(3) > .nav-link > span').should('be.visible').contains('Resume')
    });


    //navbar footer

    it('Footer - Container', () => {
        cy.get('#footer').find('div').should('have.length', 3)
    });

    it('Footer - SubContainer', () => {
        cy.get('#footer > .container').find('div').should('have.length', 2)
    });

    it('Copyright - Container', () => {
        cy.get('.copyright').should('be.visible').contains('© Copyright BaasithFazil')
        
    });

    it('Copyright - Container - Text', () => {
        cy.get('strong > span').contains('BaasithFazil')
    });

    it('Credits Container', () => {
        cy.get('.credits').contains('Designed by')
    });

    it('Credit Containers Length', () => {
        cy.get('.credits > a').should('have.length', 1).contains('Baasith')
    });

})




