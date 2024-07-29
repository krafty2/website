'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">website documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AcceuilComponent.html" data-type="entity-link" >AcceuilComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AllPromoComponent.html" data-type="entity-link" >AllPromoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashbordComponent.html" data-type="entity-link" >DashbordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashbordDistribComponent.html" data-type="entity-link" >DashbordDistribComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DemandeFormComponent.html" data-type="entity-link" >DemandeFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DemandeInstallationFormComponent.html" data-type="entity-link" >DemandeInstallationFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialgoReadDistribComponent.html" data-type="entity-link" >DialgoReadDistribComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialogCreateDistribComponent.html" data-type="entity-link" >DialogCreateDistribComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialogCreateOffreComponent.html" data-type="entity-link" >DialogCreateOffreComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialogCreateReaboComponent.html" data-type="entity-link" >DialogCreateReaboComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialogDetailReaboComponent.html" data-type="entity-link" >DialogDetailReaboComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DistributeurCarteComponent.html" data-type="entity-link" >DistributeurCarteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DistributeurFormComponent.html" data-type="entity-link" >DistributeurFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DistributeurGlobComponent.html" data-type="entity-link" >DistributeurGlobComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DistributeurListComponent.html" data-type="entity-link" >DistributeurListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GerantGlobComponent.html" data-type="entity-link" >GerantGlobComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GestionDistributeurComponent.html" data-type="entity-link" >GestionDistributeurComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GestionInstallationComponent.html" data-type="entity-link" >GestionInstallationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GestionInstallationDistribComponent.html" data-type="entity-link" >GestionInstallationDistribComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GestionPromoComponent.html" data-type="entity-link" >GestionPromoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GestionReabonnementComponent.html" data-type="entity-link" >GestionReabonnementComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GestionReabonnementDistribComponent.html" data-type="entity-link" >GestionReabonnementDistribComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InstallationAttenteComponent.html" data-type="entity-link" >InstallationAttenteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InstallationListComponent.html" data-type="entity-link" >InstallationListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InstallationListDistribComponent.html" data-type="entity-link" >InstallationListDistribComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InstallationWithParaboleComponent.html" data-type="entity-link" >InstallationWithParaboleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListOffreComponent.html" data-type="entity-link" >ListOffreComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OffreFormComponent.html" data-type="entity-link" >OffreFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PromoFormComponent.html" data-type="entity-link" >PromoFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReaboDistribAttenteComponent.html" data-type="entity-link" >ReaboDistribAttenteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReabonnementAttenteComponent.html" data-type="entity-link" >ReabonnementAttenteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReabonnementListComponent.html" data-type="entity-link" >ReabonnementListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReabonnmentListDistribComponent.html" data-type="entity-link" >ReabonnmentListDistribComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecruDistribAttenteComponent.html" data-type="entity-link" >RecruDistribAttenteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecrutementFormComponent.html" data-type="entity-link" >RecrutementFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecrutementListeComponent.html" data-type="entity-link" >RecrutementListeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SideBarComponent.html" data-type="entity-link" >SideBarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SideBarDistribComponent.html" data-type="entity-link" >SideBarDistribComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CanalPlusServiceService.html" data-type="entity-link" >CanalPlusServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Demande.html" data-type="entity-link" >Demande</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Offre.html" data-type="entity-link" >Offre</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Promos.html" data-type="entity-link" >Promos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reabonnment.html" data-type="entity-link" >Reabonnment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reabonnment-1.html" data-type="entity-link" >Reabonnment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypeP.html" data-type="entity-link" >TypeP</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});