package net.rantingmong.maoo.view

import android.content.Context
import android.util.AttributeSet
import androidx.constraintlayout.widget.ConstraintLayout
import kotlinx.android.synthetic.main.view_main_toolbar.view.*
import net.rantingmong.maoo.R

class MaooMainToolbar(context: Context, attrs: AttributeSet) : ConstraintLayout(context, attrs) {

  enum class Tab {
    FEED,
    DROP,
    USER
  }

  interface Behavior {
    fun onTabChanged(tab: Tab)
  }

  var title: String
    get() = view_toolbar_label_title.text.toString()
    set(value) {
      view_toolbar_label_title.text = value
    }

  init {
    inflate(context, R.layout.view_main_toolbar, this)
  }

  fun setToolbarBehavior(behavior: Behavior) {

  }
}
