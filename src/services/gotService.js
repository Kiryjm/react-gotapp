export default class GotService {

	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	async getAllCharacters() {
		const res = await this.getResource("/characters?page=5&pageSize=10");
		return res.map(this._transformCharacter);
	}

	async getCharacter(id) {
		const res = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(res);
	}

	async getAllBooks() {
		const res = await this.getResource(`/books/`);
		return res.map(this._transformBook);
	}

	async getBook(id) {
		const res = await this.getResource(`/books/${id}`);
		return this._transformBook(res);
	}

	async getAllHouses() {
		const res = await this.getResource(`/houses/`);
		return res.map(this._transformHouse);
	}

	async getHouse(id) {
		const res = await this.getResource(`/houses/${id}`);
		return this._transformHouse(res);
	}

	isSetData(data) {
		if(data) {
			return data;
		} else {
			return '—';
		}
	}

	_transformCharacter = (char) => {
		return {
			name: this.isSetData(char.name),
			gender: this.isSetData(char.gender),
			born: this.isSetData(char.born),
			died: this.isSetData(char.died),
			culture: this.isSetData(char.culture)
		}
	}

	_transformHouse = (house) => {
        return {
            name: this.isSetData(house.name),
            region: this.isSetData(house.region),
            words: this.isSetData(house.words),
            titles: this.isSetData(house.titles),
            overlord: this.isSetData(house.overlord),
            ancestralWeapons: this.isSetData(house.ancestralWeapons)
        };
    }
    
    _transformBook = (book) => {
        return {
            name: this.isSetData(book.name),
            numberOfPages: this.isSetData(book.numberOfPages),
            publiser: this.isSetData(book.publiser),
            released: this.isSetData(book.released)
        };
    }
}
