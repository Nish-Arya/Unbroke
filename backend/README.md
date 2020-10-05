# Running Flask in Development

1. `CD` into this directory
2. Install dependencies (`pipenv install --python 3.8 $(cat requirements.txt)`)
3. Create your DB user and DB
4. Run migrations, if you have any.
5. To test that this starter is working, initially seed the database with:
  * `pipenv run python database.py`
6. To run the backend:
   * `pipenv run flask run`

Please see the README in the root of your project skeleton for information about deployment.

### Navigation
* [Back to root README](../README.md)