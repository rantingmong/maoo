package net.rantingmong.maoo.view

import android.content.Context
import android.util.AttributeSet
import androidx.constraintlayout.widget.ConstraintLayout
import net.rantingmong.maoo.R

class MaooPostAuthor(context: Context, attrs: AttributeSet?) : ConstraintLayout(context, attrs) {
  init {
    inflate(context, R.layout.view_post_author, this)
  }
}
